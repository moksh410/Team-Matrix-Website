const alumniData = [
    // Batch 2023-25
    { name: "Sayali Dabhade", batch: "2023-25", linkedin: "https://www.linkedin.com/in/sayali-dabhade-9975b9168" , role: "President" },
    { name: "Apoorav Sharma", batch: "2023-25", linkedin: "https://www.linkedin.com/in/apoorav-sharma-521b70a9" , role: "Vice President" },
    { name: "Riya Jain", batch: "2023-25", linkedin: "https://www.linkedin.com/in/riya-jain-bb68a31b5"  , role: "Secretary"},
    { name: "Pranavi Sodagiri", batch: "2023-25", linkedin: "https://www.linkedin.com/in/pranavi-sodagiri-5158b1255/"  , role: "Treasurer"},
    { name: "Nilotpal Roy", batch: "2023-25", linkedin: "https://www.linkedin.com/in/nilotpal-roy-05"  , role: "Student Council Member & NULL Community Leader"},
    { name: "Shailendra Singh Sachan", batch: "2023-25", linkedin: "https://www.linkedin.com/in/shailendra-singh-sachan-b8205b184"  , role: "NULL Community Leader"},
    { name: "Arabinda Mishra", batch: "2023-25", linkedin: "https://www.linkedin.com/in/arvinda98"  , role: "SPOC Web & Media"},
    { name: "Swapnil Joshi", batch: "2023-25", linkedin: "https://www.linkedin.com/in/swapniljoshi827"  , role: "SPOC Events"},
    { name: "Kunal Tewari", batch: "2023-25", linkedin: "https://www.linkedin.com/in/kunaltewari"  , role: "SPOC Sponsorship & PR"},
    { name: "Harsh Oswal", batch: "2023-25", linkedin: "https://www.linkedin.com/in/harsh-oswal-4155aa189"  , role: "SPOC Technical"},
    { name: "Zeba Shaikh", batch: "2023-25", linkedin: "https://www.linkedin.com/in/zeba-shaikh-4374q"  , role: "SPOC Panel Discussion"},
    { name: "Ashutosh Raghav", batch: "2023-25", linkedin: "https://www.linkedin.com/in/ashutosh-raghav-110a89211"  , role: "SPOC Finance"},
    { name: "Shreejika Raja", batch: "2023-25", linkedin: "https://www.linkedin.com/in/shreejika-raja-62a566210"  , role: "SPOC Creatives"},
    { name: "Kashmira Takey", batch: "2023-25", linkedin: "https://www.linkedin.com/in/kashmira-takey-b0129b16b" , role: "SPOC Content Writer" },
    { name: "Anuska Banerjee", batch: "2023-25", linkedin: "https://www.linkedin.com/in/anuska-banerjee-49b361179"  , role: "Core Team Member"},
    { name: "Snigdha Gampala", batch: "2023-25", linkedin: "https://www.linkedin.com/in/snigdha-gampala-6a8053232"  , role: "Core Team Member"},
    { name: "Sakshi Pendharkar", batch: "2023-25", linkedin: "https://www.linkedin.com/in/sakshi-pendharkar"  , role: "Core Team Member"},
    { name: "Siddharth Mahapatra", batch: "2023-25", linkedin: "https://www.linkedin.com/in/adwait-kandarkar-9b151b20b"  , role: "Core Team Member"},
    { name: "Adwait Kandarkar", batch: "2023-25", linkedin: "https://www.linkedin.com/in/siddharth-m-a601a113a" , role: "Core Team Member" },
    { name: "Devanshee Pathak", batch: "2023-25", linkedin: "https://www.linkedin.com/in/devanshee-pathak-9242a2156 "  , role: "Core Team Member"},

    // Batch 2022-24
    { name: "Atif Nawaz", batch: "2022-24", linkedin: "https://www.linkedin.com/in/atif-nawaz-26b35519b"  , role: "President"},
    { name: "Ketaki Patil", batch: "2022-24", linkedin: "https://www.linkedin.com/in/ketaki-patil-ab8a9115a"  , role: "Vice President"},
    { name: "Nikita Salve", batch: "2022-24", linkedin: "https://www.linkedin.com/in/nikita-salve"  , role: "Secretary"},
    { name: "Pranay Agarwal", batch: "2022-24", linkedin: "https://www.linkedin.com/in/pranay-agarwal-a9330417a"  , role: "Treasurer"},
    { name: "Sushant Anil Parab", batch: "2022-24", linkedin: "https://www.linkedin.com/in/sushant-parab-7601841b2"  , role: "Student Council Member"},
    { name: "Vansh Makhija", batch: "2022-24", linkedin: "https://www.linkedin.com/in/vansh-makhija-1594a222a"  , role: "SPOC Web & Media"},
    { name: "Shradha Chandra", batch: "2022-24", linkedin: "https://www.linkedin.com/in/shradha-chandra-6ab398245"  , role: "SPOC Events"},
    { name: "Megh Sawke", batch: "2022-24", linkedin: "https://www.linkedin.com/in/megh-sawke"  , role: "SPOC Sponsorship & PR"},
    { name: "Nupoor Deshpande", batch: "2022-24", linkedin: "https://www.linkedin.com/in/nupoor-deshpande-6596b2114"  , role: "SPOC Technical"},
    { name: "Amey Deshmukh", batch: "2022-24", linkedin: "https://www.linkedin.com/in/amey-deshmukh-59b0381b3"  , role: "SPOC Panel Discussion"},
    { name: "Mansi Yagyseni", batch: "2022-24", linkedin: "https://www.linkedin.com/in/mansi-y-75b223130"  , role: "SPOC Finance"},
    { name: "Aditi Vohra", batch: "2022-24", linkedin: "https://www.linkedin.com/in/aditi-vohra-52a83220b"  , role: "SPOC Creatives"},
    { name: "Puneet Mishra", batch: "2022-24", linkedin: "https://www.linkedin.com/in/puneet-mishra-20900512b"  , role: "Core Team Member"},
    { name: "Sachin Sivadasan", batch: "2022-24", linkedin: "https://www.linkedin.com/in/sachin-sivadasan-ba012a165"  , role: "Core Team Member"},
    { name: "Abhipraya Deo Singh", batch: "2022-24", linkedin: "https://www.linkedin.com/in/abhipraya-deo-singh"  , role: "Core Team Member"},
    { name: "Nitish Jha", batch: "2022-24", linkedin: "https://www.linkedin.com/in/nitish-jha-44b130170"  , role: "Core Team Member"},
    { name: "Ratish Sawardekar", batch: "2022-24", linkedin: "https://www.linkedin.com/in/ratish-sawardekar-8515a8138"  , role: "Core Team Member"},
    { name: "Piyush Dhamija", batch: "2022-24", linkedin: "https://www.linkedin.com/in/piyush-dhamija"  , role: "Core Team Member"},
    { name: "Prem Chhatri", batch: "2022-24", linkedin: "https://www.linkedin.com/in/prem-chhatri-16221b160"  , role: "Core Team Member"},
    { name: "Bhavik Upmanyu", batch: "2022-24", linkedin: "https://www.linkedin.com/in/bhavik-upamanyu"  , role: "Core Team Member"},
    { name: "Dibya Jyoti Rout", batch: "2022-24", linkedin: "https://www.linkedin.com/in/dibyajyotirout"  , role: "Core Team Member"},
    { name: "Saikat Das", batch: "2022-24", linkedin: "https://www.linkedin.com/in/saikat-das-2b9a68187"  , role: "Core Team Member"},
    { name: "Ambika Jain", batch: "2022-24", linkedin: "https://www.linkedin.com/in/ambika-jain-226103171"  , role: "Core Team Member"},
    { name: "Tushar Maithani", batch: "2022-24", linkedin: "https://www.linkedin.com/in/tushar-maithani-19b3a3165"  , role: "Core Team Member"},
    { name: "Saujannya Kale", batch: "2022-24", linkedin: "https://www.linkedin.com/in/saujannya-k-900954113"  , role: "Core Team Member"},
    
  ];

  function filterTable() {
    const selectedBatch = document.getElementById('batchSelect').value;
    const tbody = document.getElementById('alumniBody');
    const table = document.getElementById('alumniTable');
    const noData = document.getElementById('noData');

    tbody.innerHTML = ''; // Clear existing rows

    if (!selectedBatch) {
      table.style.display = 'none';
      noData.style.display = 'none';
      return;
    }

    const filteredData = alumniData.filter(alumni => alumni.batch === selectedBatch);

    if (filteredData.length > 0) {
      filteredData.forEach(alumni => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${alumni.name}</td>
          <td>${alumni.role}</td>
          <td><a href="${alumni.linkedin}" target="_blank">LinkedIn Profile</a></td>
        `;
        tbody.appendChild(row);
      });
      table.style.display = 'table';
      noData.style.display = 'none';
    } else {
      table.style.display = 'none';
      noData.style.display = 'block';
    }
  }