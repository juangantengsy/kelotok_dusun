// Chart: Gender
const genderCtx = document.getElementById('genderChart');
new Chart(genderCtx, {
  type: 'pie',
  data: {
    labels: ['Pria', 'Wanita'],
    datasets: [{
      label: 'Jumlah Penduduk',
      data: [230, 270],
      backgroundColor: ['#3498db', '#e74c3c'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});

// Chart: Mata Pencaharian
const kerjaCtx = document.getElementById('pekerjaanChart');
new Chart(kerjaCtx, {
  type: 'bar',
  data: {
    labels: ['Petani', 'Buruh', 'Wiraswasta', 'Guru', 'Lainnya'],
    datasets: [{
      label: 'Jumlah',
      data: [150, 70, 50, 20, 10],
      backgroundColor: '#2ecc71'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20
        }
      }
    }
  }
});
