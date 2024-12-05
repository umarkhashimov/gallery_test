function addImage() {
    const imgName = document.getElementById('imgName').value
    const imgURL = document.getElementById('imgURL').value

    const card = `<div class="col-3">
                <div class="card mt-3">
                    <img class="card-img-top" src="${imgURL}" alt="">
                <div class="card-body">
                <p class="m-0">${imgName}</p>
            </div>
        </div>
    </div>`

    const imageList = document.querySelector('.imageList')
    imageList.innerHTML += card
}
