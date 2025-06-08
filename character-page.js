// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {

    // このページにあるキャラクターカードの要素を取得
    const cardContainer = document.querySelector('.character-card-container');

    // カードが見つかった場合のみ、クリックイベントを追加
    if (cardContainer) {
        cardContainer.addEventListener('click', function() {
            const card = this.querySelector('.character-card');
            card.classList.toggle('flipped');
        });
    }

});