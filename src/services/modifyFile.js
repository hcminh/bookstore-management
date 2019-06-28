const multer = require('multer');
const randomString = require('randomstring');
const fs = require('fs');

/**
 * function that locate files in src/app/public/<type>/
 * @param {String} type param that define what type of file upload to system
 */
function uploadFile(type) {
	let placeStore = `${type}`;
	let storage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, 'public/' + placeStore)
		},
		filename: (req, file, cb) => {
			let fileName = file.originalname.split('.');
			let newFileName = `${randomString.generate(10)}-${new Date().getTime()}`
			cb(null, `${newFileName}.${fileName[fileName.length - 1]}`);
		}
	});
	return multer({ storage: storage });
};

/**
 * function return list of address to file upload to system
 * @param {Array of File} files contain list of file upload to system
 */
function getImgLinks(files){
	let link = [];
	files.length > 0 ? files.map(item => {
		// Remove public in destination and add filename in the link
		item.link = item.destination.substring(6, item.destination.length) + '/' + item.filename;
		link.push(item.link);
	}) : null;
	return link;
};

/**
 * function that delete file in system with link
 * @param {String} link contain link locate to file that will be removed
 */
function deleteImageasync(link){
	try {
		fs.unlink('public' + link, (err) => {
			if (err) throw err;
			console.log('successfully deleted ' + link);
		});
	} catch (error) {
		console.log(error);	
	}
};

/**
 * Function delete many files
 * @param {Array} links contain list of link locate to may files will be deleted
 */
function deleteManyImg(links){
	try {
		console.log(links);
		links.map(link => {
			fs.unlink('public' + link, (err) => {
				if (err) throw err;
				console.log('successfully deleted ' + link);
			});
		})
	} catch (error) {
		console.log(error);
	}
}

function getUpdateFile(oldList, newList) {
	
}
module.exports = {
	uploadFile,
	getImgLinks,
	deleteImageasync,
	deleteManyImg
}
