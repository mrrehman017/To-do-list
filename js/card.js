var myDatabase = [
    { name: 'Rehman', email: 'rehman@gmail.com', age: '20' },
    { name: 'Ali', email: 'ali@gmail.com', age: '21' },
    { name: 'Bilal', email: 'bilal@gmail.com', age: '22' },
];


function Avatars(db) {

    var init = function() {
        generateList();
        enterUser();
    };

    var generateList = function() {
        parent = document.querySelector('#parent_avatars');
        var template = '';

        for (var i = 0; i < db.length; i++) {

            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + i + '">X</div>';
            template += '<div class="card-block">';
            template += '<h3 class="card-title">' + db[i].name + '</h3>';
            template += '<p class="card-text">';
            template += '<strong>Email</strong>:<span>' + db[i].email + '</span>';
            template += '</p>';
            template += '<p class="card-text">';
            template += '<strong>Age</strong>:<span>' + db[i].age + '</span>';
            template += '</p>';
            template += '</div>';
            template += '</div>';
            template += '</div>';

        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteCard();
    };

    var enterUser = function() {

        var grabUser = function() {

            var userName = document.querySelector('#user_name').value;
            var userEmail = document.querySelector('#user_email').value;
            var userAge = document.querySelector('#user_age').value;

            elements = [userName, userEmail, userAge];

            if (validation(elements)) {
                document.querySelector('#myForm').reset();
                db.push({ name: userName, email: userEmail, age: userAge });
                generateList();
            } else {
                document.querySelector("#error").style.display = "block";
                setTimeout(function() {
                    document.querySelector("#error").style.display = "none";
                }, 2000)
            }
        };


        document.querySelector('#myForm').addEventListener('submit', function(e) {
            e.preventDefault();
            grabUser();
        });
    };

    var validation = function(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] == '') {
                return false;
            }
        }
        return true;
    };

    var deleteCard = function() {
        var closeBtn = document.querySelectorAll('.card-delete');

        var deleteItem = function(cardNumber) {
            var attributeNumber = parseInt(cardNumber.getAttribute("data-card"));
            db.splice(attributeNumber, 1);
            generateList();
        }

        for (var i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', function() {
                deleteItem(this);
            });
        };
    };

    init();

};
Avatars(myDatabase);