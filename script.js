

// const submitbutton = document.getElementById("submitbutton");
// submitbutton.addEventListener("click",addcontent);//บอกอยากเพิ่ม การรอการฟังถ้าเกิดอีเว้นคลิกจะทำคำสั่งaddcontentอีฆฆกที

// function addcontent(){
//     console.log("it works")   
//     const text = document.getElementById("textInput").value //เก็๋บค่า
//     const result = document.getElementById("result")//เก็บเอเลเมนรีซอส
//     result.innerHTML += `<li>${text}</li>`
// }


// ดึงปุ่มเพิ่มงานและตั้งค่าให้ฟังเหตุการณ์คลิกเพื่อเรียกใช้ฟังก์ชัน addcontent
const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", addcontent); // ฟังเหตุการณ์คลิกเพื่อเรียกใช้ addcontent

function addcontent() {
    console.log("it works");
    const text = document.getElementById("textInput").value; // เก็บค่าจากอินพุต
    const result = document.getElementById("result"); // เก็บเอลิเมนต์ผลลัพธ์
    if (text) { // ตรวจสอบว่ามีข้อความที่ต้องการเพิ่มหรือไม่
        result.innerHTML += `<li>${text} <button onclick="deleteItem(this)">ลบ</button></li>`; // เพิ่มรายการใหม่ในรูปแบบ <li> และปุ่มลบ
        document.getElementById("textInput").value = ""; // ล้างค่าในช่องอินพุตหลังจากเพิ่ม
    }
}



// ดึงปุ่มลบงานทั้งหมดและตั้งค่าให้ฟังเหตุการณ์คลิกเพื่อเรียกใช้ฟังก์ชัน deleteAll
const removebutton = document.getElementById("removebutton");
removebutton.addEventListener("click", deleteAll); // ฟังเหตุการณ์คลิกเพื่อเรียกใช้ deleteAll

function deleteAll() {
    console.log("remove all");
    const result = document.getElementById("result"); // เก็บเอลิเมนต์ผลลัพธ์
    result.innerHTML = ""; // ลบเนื้อหาทั้งหมดใน result
}

function deleteItem(button) {
    console.log("remove");
    const li = button.parentElement; // หา parent ของปุ่มที่เป็น <li>
    li.remove(); // ลบ <li> ออกจาก DOM
}

 async function fetchdata() { //async คือมีการรอไม่ทำงานทีเดียวหมด รอawaitก่อน
    const data =  await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json();
   const titlelist = document.getElementById("titlelist");
   console.log(json.length)
   for(let i=0 ; i<json.length ; i++){
       titlelist.innerHTML += `<li>${json[i].title}</li>`
   }
}
fetchdata()

