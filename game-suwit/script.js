var tanya = true;
while (tanya) {
	var user = prompt('Silahkan pilih gunting batu atau kertas!');
	var komputer = Math.random();

	if (komputer < 0.33) {
		komputer = 'batu';
	}
	else if (komputer > 0.33 && komputer < 0.66) {
		komputer = 'gunting';
	}
	else {
		komputer = 'kertas';
	}

	var hasil = '';

	if (user == komputer) {
		hasil = 'SERI!';
	}
	else if (user == 'batu') {
		hasil = (komputer == 'kertas') ? 'KALAH!' : 'MENANG!';
	}
	else if (user == 'kertas') {
		hasil = (komputer == 'gunting') ? 'KALAH!' : 'MENANG!';
	}
	else if (user == 'gunting') {
		hasil = (komputer == 'batu') ? 'KALAH!' : 'MENANG!';
	}
	else {
		hasil = 'memasukkan input yang salah!';
	}

	alert('Kamu ' + hasil + '\nKamu memilih ' + user + ' dan Komputer memilih ' + komputer);

	tanya = confirm('mau main lagi?');
}

alert('terima kasih sudah bermain ');