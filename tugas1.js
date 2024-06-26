const kunciRahasia = "kunci_anda";

function buatTokenPendaftaranGunung(nama, alamat, nomorKontak) {
    const payload = {
        nama: nama,
        alamat: alamat,
        nomorKontak: nomorKontak,
        destinasi: "Liburan ke Gunung",
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) 
    };
    const token = jwt.sign(payload, kunciRahasia);
    return token;
}

function verifikasiTokenPendaftaranGunung(token) {
    try {
        const decoded = jwt.verify(token, kunciRahasia);
        return decoded;
    } catch (err) {
        return err.message;
    }
}

function buatTokenJadwalGunung(waktuShalat, waktuMakan, waktuIstirahat) {
    const payload = {
        waktuShalat: waktuShalat,
        waktuMakan: waktuMakan,
        waktuIstirahat: waktuIstirahat,
        destinasi: "Liburan ke Gunung",
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) 
    };
    const token = jwt.sign(payload, kunciRahasia);
    return token;
}

function verifikasiTokenJadwalGunung(token) {
    try {
        const decoded = jwt.verify(token, kunciRahasia);
        return decoded;
    } catch (err) {
        return err.message;
    }
}

const nama = "Idoee";
const alamat = "456 Slamet, JawaTengah";
const nomorKontak = "098765432123";
const waktuShalat = "06:00 Pagi";
const waktuMakan = "01:00 Siang";
const waktuIstirahat = "04:00 Sore";

const tokenPendaftaranGunung = buatTokenPendaftaranGunung(nama, alamat, nomorKontak);
console.log("Token Pendaftaran Gunung:", tokenPendaftaranGunung);

const verifikasiPendaftaranGunung = verifikasiTokenPendaftaranGunung(tokenPendaftaranGunung);
console.log("Verifikasi Pendaftaran Gunung:", verifikasiPendaftaranGunung);

const tokenJadwalGunung = buatTokenJadwalGunung(waktuShalat, waktuMakan, waktuIstirahat);
console.log("Token Jadwal Gunung:", tokenJadwalGunung);

const verifikasiJadwalGunung = verifikasiTokenJadwalGunung(tokenJadwalGunung);
console.log("Verifikasi Jadwal Gunung:", verifikasiJadwalGunung);