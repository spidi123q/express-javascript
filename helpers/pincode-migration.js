let count = 0;
    fs.readJson('pincode-db.json').then(data => {
       /*  console.log(data.length);//155570
        var batch = db.batch();
        for (let i = 155500; i <= 155570; i++) {
            if (i < data.length) {
                var ref = db.collection('Pincodes').doc(data[i].pincode);
                batch.set(ref, data[i]);
                console.log('count == ', i);
            } else {
                console.log('invalid data');
                batch.commit().then(function () {
                    console.log('commited upto : ', i);
                });
                break;
            }

        } */
        /* var interv = setInterval(() => {
            var batch = db.batch();
            for (let i = 0; i < 500; i++) {
                if (count < data.length) {
                    var ref = db.collection('Pincodes').doc(data[count].pincode);
                    batch.set(ref, data[count]);
                    console.log('count == ', count);
                    count++;
                } else {
                    console.log('invalid data');
                }

            }
            if ((count % 500) == 0) {
                console.log('trying commited upto : ', count);
                batch.commit().then(function () {
                    console.log('commited upto : ', count);
                });
            }
        }, 1100); */
    });