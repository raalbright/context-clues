var friends = ['Ray', 'JT', 'Justin', 'Ali', 'Ron'];
var places = ['Kitchen', 'Basement', 'Living Room', 'Dining Room', 'Den', 'Bathroom', 'Bedroom', 'Front Yard', 'Back Yard', 'Garage'];
var weapons = ['Knife', 'Hammer', 'Gun', 'Sword', 'Weapon-5', 'Weapon-6', 'Weapon-7', 'Weapon-8', 'Weapon-9', 'Weapon-10', 'Weapon-11', 'Weapon-12', 'Weapon-13', 'Weapon-14', 'Weapon-15', 'Weapon-16', 'Weapon-17', 'Weapon-18', 'Weapon-19', 'Weapon-20'];

for (var i = 0; i < 100; i++) { 
    var h3 = document.createElement('h3');
    h3.innerText = `Accusation ${i + 1}`;
    h3.addEventListener('click', (function (n) {
        return function () {
            alert(`Accusation ${n + 1}: I accuse ${friends[n % friends.length]}, with the ${weapons[n % weapons.length]} in the ${places[n % places.length]}`);
        }
    })(i));
    document.body.appendChild(h3);
}