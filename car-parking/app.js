let parkingLot = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ];
  
  function parkCar() {
    let carNumber = document.getElementById("carNumber").value.trim();
    let gateNumber = document.getElementById("gateNumber").value;
    if (carNumber === "") {
      alert("Please enter a car number.");
      return;
    }
    let gateIndex;
    switch (gateNumber) {
      case "1":
        gateIndex = { row: 0, col: 0 };
        break;
      case "2":
        gateIndex = { row: 0, col: parkingLot[0].length - 1 };
        break;
      case "3":
        gateIndex = { row: parkingLot.length - 1, col: parkingLot[0].length - 1 };
        break;
      case "4":
        gateIndex = { row: parkingLot.length - 1, col: 0 };
        break;
      default:
        alert("Invalid gate number.");
        return;
    }
    let nearestRow = -1;
    let nearestCol = -1;
    let minDistance = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < parkingLot.length; i++) {
      for (let j = 0; j < parkingLot[i].length; j++) {
        if (parkingLot[i][j] === null) {
          let distance = Math.abs(i - gateIndex.row) + Math.abs(j - gateIndex.col);
          if (distance < minDistance) {
            nearestRow = i;
            nearestCol = j;
            minDistance = distance;
          }
        }
      }
    }
    if (nearestRow === -1 && nearestCol === -1) {
      alert("Sorry, the parking lot is full.");
      return;
    }
    parkingLot[nearestRow][nearestCol] = carNumber;
    showParkingLot();
  }
  
  function showParkingLot() {
    let parkingLotElement = document.getElementById("parkingLot");
    parkingLotElement.innerHTML = "";
    let table = document.createElement("table");
    for (let i = 0; i < parkingLot.length; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < parkingLot[i].length; j++) {
        let col = document.createElement("td");
        if (parkingLot[i][j] !== null) {
          col.innerText = parkingLot[i][j];
          col.classList.add("occupied");
        }
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    parkingLotElement.appendChild(table);
  }




