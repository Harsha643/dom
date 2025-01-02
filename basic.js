// 1.Create a List and Append to the Body
// Create an unordered list (<ul>) with five list
//      items (<li>), each containing unique text.
//          Append the <ul> to the <body>.


    let list=document.createElement("ul")
    list.innerHTML=`<li>harsha 1</li> <li>harsha 1</li> <li>harsha 1</li> <li>harsha 1</li> <li>harsha 1</li>`
    document.body.append(list)

    console.log(list)
    let hr=document.createElement("hr")
    document.body.append(hr)

// 2.Create a Paragraph Inside a Div and Append
//  to the Body 
// Create a <div> element, and inside it, add a 
// <p> element with some  descriptive text.
//  Append the <div> to the <body>.

let div=document.createElement("div")
div.innerHTML=`<p>harsha create 2</p>`
document.body.append(div)


console.log(div)
let ha=document.createElement("hr")
document.body.append(ha)

// 3.Build a Nested Structure and Append to the Body
// Create a <div> containing a <h1> heading and a <p>
//  paragraph, both with distinct text. Append the <div>
//   to the <body>.

let  har=document.createElement("div1")
console.log(har)
    

har.innerHTML=`<h1>ertyuio 3</h1> <p>harsha create3 </p. `
document.body.append(har)


let hrr=document.createElement("hr")
document.body.append(hrr)

// 4.Generate a Table Row and Append to the Body
// Create a <table> element with a single row (<tr>)
//      and three cells (<td>), each containing some 
//         text. Append the <table> to the <body>.

let table=document.createElement("TABLE")
console.log(table)
table.innerHTML=` <td>id4</td>  <td>name4</td>  <td>rollno4</td> `
document.body.append(table)


let ht=document.createElement("hr")
document.body.append(ht)

// 5.Add Multiple Buttons and Append to the Body
// Create a <div> and append five <button> elements
//  to it, each with unique text for the button label.
//   Append the <div> to the <body>.

let btn=document.createElement("div")
btn.innerHTML=`<button >create</buttom>   <button>create</buttom> <button>create</buttom> <button>create</buttom> <button>create</buttom>`
document.body.append(btn)
console.log(btn)

let hg=document.createElement("hr")
document.body.append(hg)
