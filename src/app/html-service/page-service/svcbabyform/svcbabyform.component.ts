import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

interface Age {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-svcbabyform',
  templateUrl: './svcbabyform.component.html',
  styleUrls: ['./svcbabyform.component.scss'],
})
export class SvcbabyformComponent implements OnInit {

  selectedAnswers: { [question: string]: boolean } = {};
  checkedQuestions: boolean[] = [];

  babyData = {
    age: 0,
    weight: null,
    height: null,
  }
  dataCheckbox: any;


  constructor(
    private formBuilder: FormBuilder,
    private routerSvc: Router,
    private dataSvc: DataService,
  ) { }

  ngOnInit() { 
    const ageQuestionsCount = this.questions[this.babyData.age]?.length || 0;
    this.checkedQuestions = new Array(ageQuestionsCount).fill(false);
  }

  getCheckedCount(): number {
    return this.checkedQuestions.filter(checked => checked).length;
  }

  // Update variabel ketika checkbox diubah (opsional)
  onCheckboxChange(index: number) {
    console.log(`Checkbox ${index + 1} is checked:`, this.checkedQuestions[index]);
    this.dataCheckbox = this.checkedQuestions[index].valueOf();
  }

  resetCheckboxes() {
    this.checkedQuestions = new Array(this.questions[this.babyData.age]?.length || 0).fill(false);
  }

  questions: { [age: number]: string[] } = {
    1: [
      'Apakah bayi bisa mengangkat kepala saat tengkurap?',
      'Apakah bayi merespons suara dengan menangis atau tersenyum?',
      'Apakah bayi dapat memperhatikan wajah Anda dengan fokus?',
      'Apakah bayi mulai mengeluarkan suara seperti "ooh" atau "aah"?',
    ],
    2: [
      'Apakah bayi mulai tersenyum secara sosial ketika diajak berinteraksi?',
      'Apakah bayi dapat menggerakkan kepala dari sisi ke sisi?',
      'Apakah bayi mulai menatap benda bergerak seperti mainan?',
      'Apakah bayi merespons suara dengan mendengarkan lebih aktif?',
    ],
    3: [
      'Apakah bayi dapat mengangkat kepalanya saat tengkurap?',
      'Apakah bayi dapat menahan kepala tetap tegak dan stabil saat ditopang duduk?',
      'Apakah bayi mulai meraih dan memegang mainan atau benda di dekatnya?',
      'Apakah bayi sering menggenggam tangan Anda atau benda lainnya dengan kuat?',
    ],
    4: [
      'Apakah bayi mulai tertawa atau cekikikan ketika diajak bermain?',
      'Apakah bayi dapat menggulingkan tubuhnya dari posisi tengkurap ke telentang?',
      'Apakah bayi mulai memperhatikan tangannya sendiri?',
      'Apakah bayi dapat menggenggam mainan kecil yang diberikan kepadanya?',
    ],
    5: [
      'Apakah bayi dapat menggulingkan tubuhnya dari telentang ke tengkurap?',
      'Apakah bayi mulai mengangkat tubuh bagian atas menggunakan tangan saat tengkurap?',
      'Apakah bayi dapat memegang mainan dengan satu tangan?',
      'Apakah bayi mulai menunjukkan rasa ingin tahu terhadap benda di sekitarnya?',
    ],
    6: [
      'Apakah bayi mulai belajar duduk tanpa bantuan?',
      'Apakah bayi mulai meraih benda yang jauh dari jangkauannya?',
      'Apakah bayi mulai mengenali namanya ketika dipanggil?',
      'Apakah bayi dapat memindahkan mainan dari satu tangan ke tangan lainnya?',
    ],
    7: [
      'Apakah bayi mulai merangkak atau mencoba untuk merangkak?',
      'Apakah bayi mulai menunjuk benda dengan jarinya?',
      'Apakah bayi dapat duduk dengan stabil tanpa bantuan?',
      'Apakah bayi mulai mencoba meniru suara sederhana seperti "mam" atau "dad"?',
    ],
    8: [
      'Apakah bayi mulai menarik dirinya ke posisi berdiri dengan berpegangan pada benda?',
      'Apakah bayi mulai bermain dengan benda seperti menjatuhkan atau melemparkannya?',
      'Apakah bayi mulai mencoba memegang makanan kecil seperti biskuit sendiri?',
      'Apakah bayi menunjukkan kecenderungan untuk memisahkan benda dari yang lain?',
    ],
    9: [
      'Apakah bayi dapat berdiri dengan berpegangan pada sesuatu?',
      'Apakah bayi mulai menunjukkan ketertarikan pada permainan seperti cilukba?',
      'Apakah bayi mulai memahami beberapa kata sederhana seperti "tidak" atau "dadah"?',
      'Apakah bayi mulai menirukan gerakan tangan seperti melambaikan tangan?',
    ],
    10: [
      'Apakah bayi mulai melangkah dengan berpegangan pada perabot?',
      'Apakah bayi dapat mengambil benda kecil dengan jempol dan telunjuknya (pincer grasp)?',
      'Apakah bayi mulai mencoba menirukan suara dan kata yang sering ia dengar?',
      'Apakah bayi menunjukkan ekspresi wajah yang lebih variatif?',
    ],
    11: [
      'Apakah bayi mulai berjalan dengan bantuan seseorang atau perabot?',
      'Apakah bayi mulai mengenali nama-nama benda yang sering ia dengar?',
      'Apakah bayi mulai mencoba makan sendiri dengan menggunakan tangannya?',
      'Apakah bayi mulai menunjukkan rasa takut terhadap orang asing?',
    ],
    12: [
      'Apakah bayi dapat berdiri tanpa bantuan selama beberapa detik?',
      'Apakah bayi mulai melangkah sendiri tanpa bantuan?',
      'Apakah bayi mulai menunjukkan minat dalam membalik halaman buku?',
      'Apakah bayi dapat menunjukkan benda tertentu ketika diminta?',
    ],
    13: [
      'Apakah anak mulai menumpuk 2-3 balok kecil?',
      'Apakah anak mulai menunjuk benda yang menarik perhatiannya?',
      'Apakah anak dapat menunjuk benda atau gambar saat Anda menyebutkan namanya?',
      'Apakah anak mulai memahami perintah sederhana seperti "ambil bola"?',
    ],
    14: [
      'Apakah anak mulai memegang sendok dengan lebih baik saat makan?',
      'Apakah anak dapat menunjuk bagian tubuh seperti hidung atau mata jika diminta?',
      'Apakah anak menunjukkan rasa penasaran terhadap benda baru di sekitarnya?',
      'Apakah anak mulai berjalan mundur meskipun perlahan?',
    ],
    15: [
      'Apakah anak dapat berjalan dengan lebih stabil tanpa sering terjatuh?',
      'Apakah anak mulai memindahkan benda kecil dari satu tangan ke tangan lainnya dengan mudah?',
      'Apakah anak mulai menggunakan 4-5 kata secara konsisten?',
      'Apakah anak dapat memegang mainan dengan satu tangan sambil berjalan?',
    ],
    16: [
      'Apakah anak mulai berlari meskipun masih terlihat kaku?',
      'Apakah anak dapat menyusun balok hingga 3-4 tumpukan?',
      'Apakah anak mulai mencoba membuka atau menutup pintu kecil atau laci?',
      'Apakah anak menunjukkan minat untuk menirukan aktivitas orang dewasa, seperti menyapu atau memegang telepon?',
    ],
    17: [
      'Apakah anak dapat mengambil mainan kecil tanpa kehilangan keseimbangan saat berdiri?',
      'Apakah anak mulai membalik halaman buku, satu per satu?',
      'Apakah anak mulai menunjukkan rasa kepemilikan dengan mengatakan "punya saya"?',
      'Apakah anak mulai memainkan permainan sederhana seperti memasukkan benda ke wadah?',
    ],
    18: [
      'Apakah anak dapat berjalan sambil membawa benda besar seperti bola?',
      'Apakah anak mulai berbicara dalam dua kata seperti "mau susu" atau "ambil bola"?',
      'Apakah anak dapat makan sendiri menggunakan sendok meskipun masih berantakan?',
      'Apakah anak mulai menendang bola kecil yang diletakkan di depannya?',
    ],
    19: [
      'Apakah anak dapat menarik mainan dengan roda sambil berjalan?',
      'Apakah anak mulai meniru suara hewan saat ditunjukkan gambar binatang?',
      'Apakah anak mulai bermain pura-pura seperti memberi makan boneka?',
      'Apakah anak menunjukkan perhatian terhadap aktivitas anak lain meskipun belum bermain bersama?',
    ],
    20: [
      'Apakah anak mulai mengenal beberapa warna meskipun belum dapat menyebut namanya?',
      'Apakah anak dapat mengenakan sepatu atau sandal meskipun terkadang terbalik?',
      'Apakah anak menunjukkan kemarahan atau frustrasi dengan menangis saat tidak mendapatkan sesuatu?',
      'Apakah anak mulai menggambar garis sederhana menggunakan pensil atau krayon?',
    ],
    21: [
      'Apakah anak dapat menumpuk balok hingga 5-6 tumpukan?',
      'Apakah anak mulai mengenali dirinya di cermin dengan menyentuh wajahnya?',
      'Apakah anak dapat mengucapkan 10-15 kata secara konsisten?',
      'Apakah anak mulai bermain peran sederhana seperti berbicara di telepon mainan?',
    ],
    22: [
      'Apakah anak dapat menggunakan garpu kecil untuk makan makanan lunak?',
      'Apakah anak dapat menaiki tangga dengan merangkak atau berpegangan?',
      'Apakah anak mulai memahami konsep "besar" dan "kecil"?',
      'Apakah anak mulai mencoba mencuci tangan sendiri dengan bantuan kecil?',
    ],
    23: [
      'Apakah anak mulai menggambar lingkaran kasar dengan krayon atau pensil?',
      'Apakah anak dapat mematuhi dua perintah berurutan seperti "ambil mainan dan taruh di meja"?',
      'Apakah anak menunjukkan perhatian lebih lama pada cerita pendek dalam buku gambar?',
      'Apakah anak mulai menyebutkan nama benda-benda yang sering ia lihat?',
    ],
    24: [
      'Apakah anak dapat menaiki tangga dengan bantuan tangan Anda?',
      'Apakah anak mulai bermain berdampingan dengan anak lain tanpa berebut mainan?',
      'Apakah anak dapat berbicara dalam kalimat pendek berisi 2-3 kata?',
      'Apakah anak mulai memahami dan mengikuti instruksi seperti "masukkan bola ke keranjang"?',
    ],
    25: [
      'Apakah anak dapat melompat di tempat dengan kedua kaki secara bersamaan?',
      'Apakah anak mulai mencoba melepas pakaian sendiri seperti kaus atau celana?',
      'Apakah anak dapat menggenggam pensil atau krayon dengan cara yang lebih teratur?',
      'Apakah anak mulai memahami perintah dengan dua langkah, seperti "ambil mainan lalu taruh di meja"?',
    ],
    26: [
      'Apakah anak mulai bermain pura-pura seperti memberi makan boneka?',
      'Apakah anak dapat mengenali dan menunjukkan tiga bagian tubuh seperti mata, hidung, dan mulut?',
      'Apakah anak mulai menunjukkan kemampuan berbicara dengan kalimat sederhana 2-3 kata?',
      'Apakah anak dapat menumpuk 6-7 balok kecil dengan stabil?',
    ],
    27: [
      'Apakah anak dapat menggunakan sendok dan garpu dengan lebih baik untuk makan sendiri?',
      'Apakah anak dapat menunjukkan benda tertentu ketika diminta dengan deskripsi sederhana seperti "mana bola merah?"?',
      'Apakah anak mulai menunjukkan preferensi tangan kanan atau kiri ketika bermain atau makan?',
      'Apakah anak mampu menaiki tangga dengan bantuan ringan, meletakkan satu kaki di tiap anak tangga?',
    ],
    28: [
      'Apakah anak mulai mengenal konsep dasar seperti "atas" dan "bawah"?',
      'Apakah anak dapat menggambar garis lurus atau melingkar di atas kertas?',
      'Apakah anak mulai mencoba bermain dengan anak lain meskipun interaksi masih sederhana?',
      'Apakah anak mulai mengenali objek yang lebih kecil seperti tombol atau kancing di pakaian?',
    ],
    29: [
      'Apakah anak dapat meniru suara atau kata baru dengan cepat setelah mendengarnya?',
      'Apakah anak dapat mengidentifikasi warna sederhana seperti merah atau biru?',
      'Apakah anak mulai memahami konsep miliknya seperti "mainan saya" atau "buku saya"?',
      'Apakah anak mulai menyebutkan nama-nama anggota keluarga dengan benar?',
    ],
    30: [
      'Apakah anak dapat berlari dengan lebih baik tanpa sering terjatuh?',
      'Apakah anak dapat mengayuh sepeda roda tiga atau mainan dorong?',
      'Apakah anak dapat mengatur mainan sesuai kategori seperti warna atau bentuk?',
      'Apakah anak mulai berbicara dengan kalimat sederhana terdiri dari 3-4 kata?',
    ],
    31: [
      'Apakah anak mulai bisa menyebutkan usianya ketika ditanya?',
      'Apakah anak dapat membuka dan menutup ritsleting pada pakaian dengan sedikit bantuan?',
      'Apakah anak mulai mengenali perasaan sederhana seperti sedih atau senang pada orang lain?',
      'Apakah anak mulai bermain dengan aturan sederhana, seperti mengikuti giliran dalam permainan?',
    ],
    32: [
      'Apakah anak dapat mengenali suara hewan tertentu ketika didengar seperti "moo" untuk sapi?',
      'Apakah anak mulai menggunakan kata sifat seperti "besar" dan "kecil" dalam berbicara?',
      'Apakah anak dapat mengikuti cerita pendek yang diceritakan dengan gambar atau buku?',
      'Apakah anak dapat melompat dari tempat rendah seperti anak tangga pertama tanpa bantuan?',
    ],
    33: [
      'Apakah anak mulai mengerti konsep waktu sederhana seperti "nanti" atau "sekarang"?',
      'Apakah anak dapat menyebutkan jenis kelamin dirinya (laki-laki atau perempuan)?',
      'Apakah anak dapat memasangkan benda seperti sendok dengan piring atau kaus dengan celana?',
      'Apakah anak mulai mencoba mengenakan kaus kaki sendiri?',
    ],
    34: [
      'Apakah anak dapat menyanyikan lagu pendek seperti "Twinkle Twinkle Little Star"?',
      'Apakah anak dapat menggambar bentuk dasar seperti lingkaran atau segi empat?',
      'Apakah anak mulai bercerita tentang pengalamannya meskipun masih sederhana?',
      'Apakah anak mulai bisa bermain permainan berpura-pura yang lebih kompleks seperti pura-pura menjadi dokter?',
    ],
    35: [
      'Apakah anak dapat mengikuti permainan yang membutuhkan instruksi sederhana seperti "taruh bola di keranjang"?',
      'Apakah anak mulai mengenali emosi seperti marah, bahagia, atau takut pada dirinya sendiri?',
      'Apakah anak dapat membuka dan menutup tutup botol dengan tangan sendiri?',
      'Apakah anak mulai menyebutkan nama teman atau orang yang sering ditemuinya?',
    ],
    36: [
      'Apakah anak dapat melompat dengan satu kaki tanpa kehilangan keseimbangan?',
      'Apakah anak dapat menyebutkan 3-5 warna dengan benar?',
      'Apakah anak mulai menggunakan kalimat dengan struktur yang lebih kompleks, seperti "Aku ingin makan nasi sekarang"?',
      'Apakah anak dapat mengenali dan menyebutkan angka dari 1 sampai 10?',
      'Apakah anak mulai menunjukkan rasa empati, seperti mencoba menenangkan temannya yang menangis?',
    ],
  };


  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.navigateToChart()
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  navigateToChart() {
    const checkedCount = this.getCheckedCount();
    console.log('Checkbox count:', checkedCount);
    
    this.routerSvc.navigate(['/page/chart-baby'], {
      queryParams: {
        age: this.babyData.age,
        weight: this.babyData.weight,
        height: this.babyData.height,
        checkbox : checkedCount
      }
    });
  }



}
