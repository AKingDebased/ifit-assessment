document.addEventListener("DOMContentLoaded", function() {
    // Init carousel
    $('.reviews__carousel').slick({
        slidesToShow: 3,
        centerMode: true,
        infinite: true,
        draggable: true,
        arrows: true,
        centerPadding: '24px'
    });

    // Render card grid
    const cardsData = [{
        title: 'Lake Inniscarra, Ireland — Pyramid',
        hasDetails: true,
        time: '30:53',
        miles: '6,248',
        bgImgId: 1
    }, {
        title: 'Performance Series',
        workoutsNum: 9,
        bgImgId: 2
    }, {
        title: 'Slow Pulls and Fast Intervals',
        time: '44:13',
        miles: '9,948',
        bgImgId: 3
    }, {
        title: '20 Minutes to Toned',
        workoutsNum: 12,
        bgImgId: 4
    }, {
        title: 'Charles Race, Boston, Massachusetts',
        time: '36:22',
        miles: '8,6487',
        bgImgId: 5
    }, {
        title: 'Full-Body HIIT Series',
        workoutsNum: 12,
        bgImgId: 6
    }, {
        title: 'Kafue River, Zambia—Power Stroke Pyramid',
        time: '22:22',
        miles: '4,660',
        bgImgId: 7
    }, {
        title: 'Shred & Burn Series',
        workoutsNum: 16,
        bgImgId: 8
    }];

    const gridItemsPerRow = 4, 
        gridNumRows = 2, 
        rawGridTemplate = document.querySelector('#grid-card-template').innerHTML, 
        gridEl = document.querySelector('.grid-container');

    const cardGridNodes = generateCardGrid(
        cardsData, 
        rawGridTemplate, 
        gridItemsPerRow, 
        gridNumRows, 
        // TODO: Might not even need these properties
        ['is-centered', 'is-variable', 'is-6'],
        ['title', 'workoutsNum', 'time', 'miles', 'hasDetails', 'bgImgId']);

    document.querySelector('#grid-roller').setAttribute('style', 'display:none');
    cardGridNodes.forEach(rowNode => gridEl.appendChild(rowNode));


    // // Render equipment card grid
    const equipmentData = [{
        name: 'Treadmills',
        imgSrc: 'img/grid/treadmill.png'
    }, {
        name: 'Bikes',
        imgSrc: 'img/grid/bikes.png'
    }, {	
        name: 'Ellipticals',
        imgSrc: 'img/grid/ellipticals.png'
    }, {
        name: 'Strength',
        imgSrc: 'img/grid/strength.png'
    }];

    const equipmentGridItemsPerRow = 4,
        equipmentNumRows = 1,
        equipmentRawGridTemplate = document.querySelector('#equipment-grid-template').innerHTML,
        equipmentGridEl = document.querySelector('.equipment-grid-container');
        
    const equipmentGridNodes = generateCardGrid(
        equipmentData, 
        equipmentRawGridTemplate, 
        equipmentGridItemsPerRow, 
        equipmentNumRows, 
        [],
        ['name', 'imgSrc']
    );

    document.querySelector('#grid-roller').setAttribute('style', 'display:none');
    equipmentGridNodes.forEach(rowNode => equipmentGridEl.appendChild(rowNode));

    // Generic grid rendering function
    function generateCardGrid (cardsData, rawTemplate, itemsPerRow, numRows, rowClasses, properties) {
        const rowNodes = [];

        for (let i = 0; i < numRows; i++) {
            let rowNode = document.createElement('div');
            
            rowNode.classList.add('columns', ...rowClasses);
            rowNodes.push(rowNode);
        }

        let currentRow = 0;
        const compiledGridCardTemplate = _.template(rawTemplate);

        cardsData.forEach((card, index) => {
            let column = document.createElement('div');
                
            column.classList.add('column');

            const templateVariables = properties.reduce((accumulator, currentVal) => {
                accumulator[currentVal] = card[currentVal];

                return accumulator;
            }, {});

            column.innerHTML = compiledGridCardTemplate(templateVariables);

            rowNodes[currentRow].appendChild(column);

            if ((index + 1) / itemsPerRow === 1) currentRow++;
        });

        return rowNodes;
    }
});