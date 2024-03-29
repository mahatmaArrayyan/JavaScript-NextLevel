// arrow function
// cara yang lebih ringkas di bandingkan function expression

// 1 param tidak butuh kurung, tidak butuh kurung kurawal, dan return
const haiHero = nama => `Halo bang ${nama}`
// implisit return
console.log(haiHero("brody"))

// dua butuh
const haiNama = (nama, lane) => { 
    return `Halo bang ${nama}, semangat jaga ${lane}`
}
console.log(haiNama("brody", "gold lane"))

// cara yang lebih ringkas lagi, jika tanpa param
const hai = () => "halo world";
console.log(hai())

let namaMahasiswa = ['ryan', 'alil', 'dhafin dzahin']
// let charNama = namaMahasiswa.map( nama => nama.length ) 

// console.log(charNama)

let tbNamaMahasiswa = namaMahasiswa.map(nama =>({
    nama, charNama: nama.length
}))
console.table(tbNamaMahasiswa)

// bagaimana jika kita menggunakan this?

// sekarang kit akan belajar konsep this pada arrow funciton
// ini bentuk normalnya
// const Mahasiswa = function(){
//     this.nama = 'ryan',
//     this.umur = '18'
//     this.hai  = function(){
//         return `halo nama saya ${this.nama}, saya sekarang umur ${this.umur}`
//     }
// }

// const ryan = new Mahasiswa();

// ternyata gak bisa di ubah
const Mahasiswa = function(){
    this.nama = 'ryan',
    this.umur = '18'
    // tapi method bisa
    this.hai  = ()=>{
        return `halo nama saya ${this.nama}, saya sekarang umur ${this.umur}`
    }
}

const ryan = new Mahasiswa();

// bagaimana kalau object literal?
// apakah method masih bisa di singkat atau ada masalah laiN?
// ternyata arrow function pada object literal tidak memiliki konsep this/
const dataDiri = {
    nama : 'muh. mahatma arrayyan',
    umur : 18,
    hai : () => {
        // return `halo saya ${this.nama}, umur ku ${this.umur}`
        console.log(this)
    }
}

// const DataRyan = function(){
//     this.nama = 'ryan',
//     this.umur = '18'
//     // tapi method bisa
//     this.hai  = ()=>{
//         return `halo nama saya ${this.nama}, saya sekarang umur ${this.umur}`
//     }

    // jika menggunakan function biasa, this akan mengacu kepada window
    // jika pakai arrow function this akan mencari ke atas
//     setInterval(() =>{
//         console.log(this.umur++);
//     }, 500);
// }
// const dataRyan = new DataRyan();

// jadi dimana kita pakai arrow function?

// ini adalah cara normal yang biasa ku lakukan dengan dom
// const box = document.querySelector('.box');
// box.addEventListener('click', ()=>{
//     setTimeout(function(){
//         box.classList.toggle('caption')
//     }, 600)
//     box.classList.toggle('size')
// })

// ini cara pakai arrow function dan this thas thoooss
const boxThis = document.querySelector('.box');
boxThis.addEventListener('click', function (){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua]=[dua, satu]
    }

    setTimeout(()=>{
        this.classList.toggle(dua)
    }, 600)
    this.classList.toggle(satu)
})








