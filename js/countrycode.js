fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const select = document.getElementById('country-code');
        select.innerHTML = ''; // Clear loading text

        // Extract and clean dial codes
        const codes = new Set();

        data.forEach(c => {
          if (c.idd && c.idd.root && c.idd.suffixes) {
            c.idd.suffixes.forEach(suffix => {
              codes.add(`${c.idd.root}${suffix}`);
            });
          }
        });

        // Convert Set to array and sort numerically
        [...codes]
          .sort((a, b) => a.localeCompare(b))
          .forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = code;
            select.appendChild(option);
          });
      })
      .catch(err => {
        document.getElementById('country-code').innerHTML =
          '<option>Error loading codes</option>';
        console.error(err);
      });