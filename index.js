// require dependencies
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');




const button = document.getElementById('button'); 

button.addEventListener('click', () => {
    var text = document.getElementById('text').value;
    text += ' ' + document.getElementById('textTwo').value; 
    
    pdfDocument(text);

});

//Wrap the document in a function that takes the input from an event listener

function pdfDocument(text) {


// create a document the same way as above - to set size to ISO standards {size: 'A7'}
const doc = new PDFDocument({size: 'A7'});



// pipe the document to a blob

const stream = doc.pipe(blobStream());


//Doc Content 
doc.text(text, 25, 25);

doc.moveTo(0, 20) // set the current point
 .lineTo(100, 160) // draw a line
 .stroke(); 



// get a blob when you're done
doc.end();

stream.on('finish', function() {
    // get a blob you can do whatever you like with

    const url = stream.toBlobURL('application/pdf');
    
    const element = document.getElementById('pdf');

    element.setAttribute('href', url);
    element.style.display = 'block';


   });

}; 

 