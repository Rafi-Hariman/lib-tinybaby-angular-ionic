import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal3month',
  templateUrl: './modal3month.component.html',
  styleUrls: ['./modal3month.component.scss'],
})
export class Modal3monthComponent implements OnInit {

  @Input() data!: string;
  contents: any[] = [
    {
      buttonClass: 'btn-1',
      code: 'Usia 0 sampai 3 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/detail-bayi-3.jpeg',
      motorik_kasar:
        'Bayi dapat bergerak tak terkendali saat terlentang, dengan lengan dan tungkai yang aktif, serta dapat mengangkat kepalanya dengan tegak saat berada dalam posisi telungkup.',
      sosialisai_dan_kemandirian: 'Bayi mampu melihat wajah orang dan bayi mampu merespon tersenyum.',
      bicara_dan_bahasa: 'Bayi mampu mengeluarkan ocehan serta bayi tertawa saat digelitiki'
    },
    {
      buttonClass: 'btn-2',
      code: 'Usia 4 sampai 6 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/details-6.jpeg',
      motorik_kasar:
        'Bayi mampu mempertahankan lehernya secara kuat, mengangkat dada dan kedua lengan sebagai penyangga saat posisi telungkup, mempertahankan posisi kepala tegak dan stabil, serta berbalik paling sedikit dua kali dari terlentang ke telungkup dan sebaliknya.',
      sosialisai_dan_kemandirian: 'Bayi tersenyum ketika melihat mainan yang lucu, gambar atau Binatang peliharaan saat bayi bermain sendiri.',
      bicara_dan_bahasa: 'Bayi mampu mengeluarkan suara gembira bernada tinggi atau memekik tetapi bukan menangis.'
    },
    {
      buttonClass: 'btn-3',
      code: 'Usia 7 sampai 9 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/6.jpeg',
      motorik_kasar:
        'Bayi mampu duduk sendiri dengan kedua tangan menyangga tubuhnya, belajar berdiri dengan kedua kakinya menyanggah sebagian berat badan, serta merangkak untuk meraih mainan atau mendekati seseorang.',
      sosialisai_dan_kemandirian: 'Bayi mampu mencari mainan atau benda yang dijatuhkan, bermain tepuk tangan atau ciluk ba, serta mampu memakan makanan sendiri.',
      bicara_dan_bahasa: 'Bayi mampu bersuara tanpa arti, seperti mamama, bababa, dadada, tatata, papapa'
    },
    {
      buttonClass: 'btn-4',
      code: 'Usia 10 sampai 12 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/detail-bayi-12.jpeg',
      motorik_kasar:
        'Bayi mampu mengangkat badannya pada posisi berdiri, belajar berdiri sambil memegang benda di sekitarnya seperti meja atau kursi, dan mampu berjalan dengan bantuan atau dituntun.',
      sosialisai_dan_kemandirian: 'Tangan bayi berusaha meraih benda yang dilihat, sementara bayi mungkin merasa ketakutan terhadap orang yang belum dikenal.',
      bicara_dan_bahasa: 'Bayi mampu menirukan suara yang didengar, menyebut kata-kata kecil, dan mengeskpresikan sesuatu ketika mendengar suara yang didengarnya.'
    },
    {
      buttonClass: 'btn-5',
      code: 'Usia 13 sampai 18 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/bayi-18.jpg',
      motorik_kasar:
        'Bayi mampu berdiri sendiri tanpa berpegangan, berjalan mundur lima langkah, serta membungkuk untuk memungut mainan kemudian berdiri kembali.',
      sosialisai_dan_kemandirian: 'Bayi mampu menunjukkan apa yang diinginkannya tanpa menangis atau merengek, mengeluarkan suara yang menyenangkan, dan menarik tangan ibu.',
      bicara_dan_bahasa: 'Bayi mampu memanggil ayah dengan kata “papa”, memanggi ibu dengan kata “mama”'
    },
    {
      buttonClass: 'btn-6',
      code: 'Usia 19 sampai 24 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/detail-bayi-24.jpg',
      motorik_kasar:
        'Bayi mampu menaiki tangga sendiri serta bayi mampu bermain dan menendang bola kecil.',
      sosialisai_dan_kemandirian: 'Bayi mampu memegang sendok atau cangkir sendiri untuk belajar makan dan minum, bertepuk tangan, melambai-lambaikan tangan, menirukan pekerjaan rumah tangga, dan mengetahui jenis kelaminnya sendiri.',
      bicara_dan_bahasa: 'Bayi mampu menyebut 3-6 kata yang mempunyai arti'
    },
    {
      buttonClass: 'btn-7',
      code: 'Usia 25 sampai 36 bulan',
      title_motorik: 'Motorik Kasar',
      title_sosialisasi: 'Sosialiasi dan Kemandirian',
      title_bicara: 'Bicara dan Bahasa',
      image: 'assets/image/30.jpeg',
      motorik_kasar:
        'Bayi mampu berdiri sendiri tanpa berpegangan 30 detik, berjalan mundur 10 langkah, serta membungkuk untuk memungut mainan kemudian berdiri kembali.',
      sosialisai_dan_kemandirian: 'Bayi mampu makan nasi sendiri tanpa banyak yang tercecer serta bayi mampu melepas pakaiannya sendiri',
      bicara_dan_bahasa: 'Bayi mulai mampu berbicara dengan baik menggunakan dua kata, menunjuk satu atau lebih bagian tubuhnya ketika ditanya, melihat gambar dan dapat menyebut dengan benar nama dua benda atau lebih, serta membantu membereskan mainannya sendiri.'
    },
  ];

  selectedContent: any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.log(this.data,'data');
    
    this.selectedContent = this.contents.find(
      (content) => content.buttonClass === this.data
    );
    console.log(this.selectedContent);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}

