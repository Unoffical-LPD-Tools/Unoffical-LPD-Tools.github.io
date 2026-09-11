async function Autocomplete(DataListID, URL) {
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status)
    }
    const data = await response.text()
    const fdata = data.split('\n')
    console.log(fdata)
    
    
    fdata.forEach(function(item){
       var option = document.createElement('option');
       option.value = item;
       document.getElementById(DataListID).appendChild(option);
    });
    
    
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Autocomplete("list", 'https://raw.githubusercontent.com/Unoffical-LPD-Tools/Autofills/refs/heads/main/dispatcher')