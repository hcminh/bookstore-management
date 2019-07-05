const mongoose = require('mongoose');
const { Document, Packer, Paragraph, TextRun, WidthType, VerticalAlign } = require('docx');
const fs = require("fs");

const ManageBook = mongoose.model('manageBook')

async function getPage(req, res, next) {
	try {
		listBooks = await ManageBook.find({}).populate('book');
		return res.render('adminpage/warehouse', { listBooks, user: req.user });
	} catch (error) {
		next(error);
	}
}

async function createDocx(req, res, next) {
	try {

		let list = await ManageBook.find({}).populate('book');

		const doc = new Document();

		let table = doc.createTable({
			rows: list.length + 3,
			columns: 5,
			width: 100,
			widthUnitType: WidthType.PERCENTAGE,
			columnWidths: [1000, 1000, 1000, 1000, 1000]
		});



		table.getRow(0).mergeCells(0, 4);
		table.getCell(0, 0)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph("Báo cáo tồn kho")
				.heading1()
				.center())

		table.getRow(1).mergeCells(0, 4);
		table.getCell(1, 0)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph(`Tháng: ${new Date().toLocaleDateString()}`)
				.heading4()
				.center())

		table.getCell(2, 0)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph("STT")
				.heading3()
				.center())

		table.getCell(2, 1)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph(`Sách`)
				.heading3()
				.center())

		table.getCell(2, 2)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph(`Tồn đầu`)
				.heading3()
				.center())

		table.getCell(2, 3)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph(`Phát sinh`)
				.heading3()
				.center())

		table.getCell(2, 4)
			.setVerticalAlign(VerticalAlign.CENTER)
			.addParagraph(new Paragraph(`Tồn cuối`)
				.heading3()
				.center())



		list.map((item, index) => {
			table.getCell(index + 3, 0)
				.setVerticalAlign(VerticalAlign.CENTER)
				.addParagraph(new Paragraph(`${index}`)
					.center())

			table.getCell(index + 3, 1)
				.setVerticalAlign(VerticalAlign.CENTER)
				.addParagraph(new Paragraph(`${item.bookID}`)
				.center())

			table.getCell(index + 3, 2)
				.setVerticalAlign(VerticalAlign.CENTER)
				.addParagraph(new Paragraph(`${item.initAmount}`)
				.center())

			table.getCell(index + 3, 3)
				.setVerticalAlign(VerticalAlign.CENTER)
				.addParagraph(new Paragraph(`${item.amount - item.initAmount + item.solds}`)
				.center())

			table.getCell(index + 3, 4)
				.setVerticalAlign(VerticalAlign.CENTER)
				.addParagraph(new Paragraph(`${item.amount}`)
				.center())
		})

		const packer = new Packer();


		let buffer = await packer.toBuffer(doc)


		await fs.writeFileSync("Báo cáo.docx", buffer);
		return res.download("Báo cáo.docx");


	} catch (error) {
		next(error);
	}
}



module.exports = {
	getPage,
	createDocx
}

