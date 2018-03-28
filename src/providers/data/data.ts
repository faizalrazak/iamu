import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

	agencies = [
{
cat:"AGENSI",
name:"Amanah Hartanah Bumiputera(AHB)",
img_url:"../../assets/agency_img/ahb.jpg",
description:"Amanah Hartanah Berhad (AHB) merupakan unit trust fund yang patuh syariah dan fokus kepada pelaburan hartanah di seluruh Malaysia. Ianya diwujudkan untuk memberi peluang kepada pelabur Bumiputera dalam memiliki hartanah komersil melalui pegangan unit saham dalam AHB.",
address:"Maybank Asset Management Sdn Bhd \n Tingkat 12, Menara C, Dataran Maybank No 1, Jalan Maarof \n 59000 Kuala Lumpur \n Malaysia",
tel:"03 - 2297 7888",
fax:"03 - 2297 7998",
web:"http://www.maybank-am.com.my",
email:"mamcs@maybank-am.com.my",
url:"http://www.phb.com.my/AHB.html",
cat_indusri:"HARTANAH",
cat_prog:"PEMBIAYAAN",
cat_niaga:"KECIL",
nama_prog:"UNIT TRUST FUND",
keterangan_prog:"Pelaburan dinaungi oleh pelaburan hartanah komersil seluruh Malaysia \nAHB merupakan skim pelaburan yang patuh syariah. Diuruskan oleh pengurus dana yang berpengalaman. Pelaburan jangka masa panjang dengan pulangan baik",
kelayakan_syarat:"(i) Bumiputera Malaysia: \n (a) Akaun Dewasa (18 tahun ke atas); \n (b) Akaun Remaja (bagi pemohon bawah umur atau kanak-kanak berumur tiga (3) bulan tetapi di bawah usia 18 tahun dibawah nama penjaga yang sah. Kedua-dua penjaga yang sah dan kanak-kanak tersebut mestilah Bumiputera Malaysia);",
had_min:"(i) Individu dengan tunai – 100 unit \n (ii) Individu di bawah Skim Pelaburan Ahli KWSP – 1,000 unit \n (iii) Institusi Bumiputera – 250,000 unit (Nota 1)",
had_max:"(i) Individu – 500,000 unit"
},
{
cat:"AGENSI",
name:"Amanah Ikhtiar Malaysia (AIM)",
img_url:"../../assets/agency_img/aim.jpg",
description:"Amanah Ikhtiar Malaysia (AIM) ialah sebuah badan Amanah Persendirian yang ditubuhkan pada 17 September 1987 melalui Suratcara Perjanjian AIM dan didaftarkan di bawah Akta Amanah (Pemerbadanan) 1952 (pindaan 1981) (Akta 258). Penubuhan AIM adalah rentetan daripada kejayaan Projek Ikhtiar yang merupakan satu projek penyelidikan bertindak dilaksanakan oleh Pusat Penyelidikan Dasar, Universiti Sains Malaysia dari tahun 1986 hingga 1987 di Barat Laut Selangor. Penyelidikan bertindak ini yang diketuai oleh Profesor David S. Gibbons dan Profesor Sukor Kasim adalah untuk menguji Pendekatan ini menawarkan skim pembiayaan kredit mikro berpenyeliaan rapi kepada golongan miskin untuk mengusahakan sebarang kegiatan ekonomi berasaskan kemahiran yang dimiliki sebagai usaha menambahkan pendapatan keluarga.",
address:"Ibu Pejabat Amanah Ikhtiar Malaysia \n Menara Amanah Ikhtiar, \n No 3 Jalan Cempaka SD 12/1A, \n Bandar Sri Damansara PJU9 52200 \n Kuala Lumpur",
tel:"03 6274 8810",
fax:"03 6274 8809",
web:"aim.gov.my",
email:"ikhtiar@aim.gov.my",
url:"http://aim.gov.my/khidmat/simpanan",
cat_indusri:"industri kecil & sederhana",
cat_prog:"PEMBIAYAAN",
cat_niaga:"KECIL",
nama_prog:"i-Mesra",
keterangan_prog:"",
kelayakan_syarat:"WARGANEGARA MALAYSIA (mempunyai MYKAD) yang berumur 18 tahun ke atas.; \n HAD KELAYAKAN PENDAPATAN isi rumah ialah RM3,855 dan per kapita RM838;",
had_min:1000,
had_max:10000
},
{
cat:"AGENSI",
name:"Amanah Ikhtiar Malaysia (AIM)",
img_url:"../../assets/agency_img/aim.jpg",
description:"Amanah Ikhtiar Malaysia (AIM) ialah sebuah badan Amanah Persendirian yang ditubuhkan pada 17 September 1987 melalui Suratcara Perjanjian AIM dan didaftarkan di bawah Akta Amanah (Pemerbadanan) 1952 (pindaan 1981) (Akta 258). Penubuhan AIM adalah rentetan daripada kejayaan Projek Ikhtiar yang merupakan satu projek penyelidikan bertindak dilaksanakan oleh Pusat Penyelidikan Dasar, Universiti Sains Malaysia dari tahun 1986 hingga 1987 di Barat Laut Selangor. Penyelidikan bertindak ini yang diketuai oleh Profesor David S. Gibbons dan Profesor Sukor Kasim adalah untuk menguji Pendekatan ini menawarkan skim pembiayaan kredit mikro berpenyeliaan rapi kepada golongan miskin untuk mengusahakan sebarang kegiatan ekonomi berasaskan kemahiran yang dimiliki sebagai usaha menambahkan pendapatan keluarga.",
address:"Ibu Pejabat Amanah Ikhtiar Malaysia \n Menara Amanah Ikhtiar, \n No 3 Jalan Cempaka SD 12/1A, \n Bandar Sri Damansara PJU9 52200 \n Kuala Lumpur",
tel:"03 6274 8810",
fax:"03 6274 8809",
web:"aim.gov.my",
email:"ikhtiar@aim.gov.my",
url:"http://aim.gov.my/khidmat/simpanan",
cat_indusri:"industri kecil & sederhana",
cat_prog:"PEMBIAYAAN",
cat_niaga:"KECIL",
nama_prog:"i-Srikandi;",
keterangan_prog:"",
kelayakan_syarat:"WARGANEGARA MALAYSIA (mempunyai MYKAD) yang berumur 18 tahun ke atas.; \n HAD KELAYAKAN PENDAPATAN isi rumah ialah RM3,855 dan per kapita RM838;",
had_min:12000,
had_max:20000
},
{
cat:"AGENSI",
name:"Amanah Ikhtiar Malaysia (AIM)",
img_url:"../../assets/agency_img/aim.jpg",
description:"Amanah Ikhtiar Malaysia (AIM) ialah sebuah badan Amanah Persendirian yang ditubuhkan pada 17 September 1987 melalui Suratcara Perjanjian AIM dan didaftarkan di bawah Akta Amanah (Pemerbadanan) 1952 (pindaan 1981) (Akta 258). Penubuhan AIM adalah rentetan daripada kejayaan Projek Ikhtiar yang merupakan satu projek penyelidikan bertindak dilaksanakan oleh Pusat Penyelidikan Dasar, Universiti Sains Malaysia dari tahun 1986 hingga 1987 di Barat Laut Selangor. Penyelidikan bertindak ini yang diketuai oleh Profesor David S. Gibbons dan Profesor Sukor Kasim adalah untuk menguji Pendekatan ini menawarkan skim pembiayaan kredit mikro berpenyeliaan rapi kepada golongan miskin untuk mengusahakan sebarang kegiatan ekonomi berasaskan kemahiran yang dimiliki sebagai usaha menambahkan pendapatan keluarga.",
address:"Ibu Pejabat Amanah Ikhtiar Malaysia \n Menara Amanah Ikhtiar, \n No 3 Jalan Cempaka SD 12/1A, \n Bandar Sri Damansara PJU9 52200 \n Kuala Lumpur",
tel:"03 6274 8810",
fax:"03 6274 8809",
web:"aim.gov.my",
email:"ikhtiar@aim.gov.my",
url:"http://aim.gov.my/khidmat/simpanan",
cat_indusri:"industri kecil & sederhana",
cat_prog:"PEMBIAYAAN",
cat_niaga:"KECIL",
nama_prog:"i-Wibawa;",
keterangan_prog:"",
kelayakan_syarat:"WARGANEGARA MALAYSIA (mempunyai MYKAD) yang berumur 18 tahun ke atas.; \n HAD KELAYAKAN PENDAPATAN isi rumah ialah RM3,855 dan per kapita RM838;",
had_min:0,
had_max:5000
},
{
cat:"AGENSI",
name:"Amanah Ikhtiar Malaysia (AIM)",
img_url:"../../assets/agency_img/aim.jpg",
description:"Amanah Ikhtiar Malaysia (AIM) ialah sebuah badan Amanah Persendirian yang ditubuhkan pada 17 September 1987 melalui Suratcara Perjanjian AIM dan didaftarkan di bawah Akta Amanah (Pemerbadanan) 1952 (pindaan 1981) (Akta 258). Penubuhan AIM adalah rentetan daripada kejayaan Projek Ikhtiar yang merupakan satu projek penyelidikan bertindak dilaksanakan oleh Pusat Penyelidikan Dasar, Universiti Sains Malaysia dari tahun 1986 hingga 1987 di Barat Laut Selangor. Penyelidikan bertindak ini yang diketuai oleh Profesor David S. Gibbons dan Profesor Sukor Kasim adalah untuk menguji Pendekatan ini menawarkan skim pembiayaan kredit mikro berpenyeliaan rapi kepada golongan miskin untuk mengusahakan sebarang kegiatan ekonomi berasaskan kemahiran yang dimiliki sebagai usaha menambahkan pendapatan keluarga.",
address:"Ibu Pejabat Amanah Ikhtiar Malaysia \n Menara Amanah Ikhtiar, \n No 3 Jalan Cempaka SD 12/1A, \n Bandar Sri Damansara PJU9 52200 \n Kuala Lumpur",
tel:"03 6274 8810",
fax:"03 6274 8809",
web:"aim.gov.my",
email:"ikhtiar@aim.gov.my",
url:"http://aim.gov.my/khidmat/simpanan",
cat_indusri:"industri kecil & sederhana",
cat_prog:"PEMBIAYAAN",
cat_niaga:"KECIL",
nama_prog:"i-Sejahtera;",
keterangan_prog:"",
kelayakan_syarat:"WARGANEGARA MALAYSIA (mempunyai MYKAD) yang berumur 18 tahun ke atas.; \n HAD KELAYAKAN PENDAPATAN isi rumah ialah RM3,855 dan per kapita RM838;",
had_min:1000,
had_max:10000
}]


  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getAllAgencies(){
	return this.agencies
}

}

