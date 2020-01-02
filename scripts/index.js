
//registerModal()

function registerModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    window.onclick = () => {
        modal.style.display = 'none';
    }

}