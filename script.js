// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {

    // --- メインキャラクターのリスト ---
    const mainCharacters = [
        { name: "すなみ", link: "characters/sunami.html", color: "sunami-orange" },
        { name: "いづね", link: "characters/izune.html", color: "izune-blue" },
        { name: "しのね", link: "characters/shinone.html", color: "shinone-purple" },
        { name: "かおり", link: "characters/kaori.html", color: "kaori-green" },
        { name: "かなめ", link: "characters/kaname.html", color: "kaname-gray" },
    ];

    // --- サブキャラクターのリスト（新しく追加） ---
    const subCharacters = [
        { name: "橘さん", description: "神社の先代神主。かなめを後継者にしたいと思っているご隠居。" },
        // ★今後サブキャラが増えたらここに追記する
    ];


    // --- メインキャラクターのリンクボタンを作成 ---
    const mainListContainer = document.getElementById('main-character-list');
    mainCharacters.forEach(character => {
        const linkButton = document.createElement('a');
        linkButton.href = character.link;
        linkButton.textContent = character.name;
        linkButton.className = 'character-link-button';
        linkButton.dataset.color = character.color;
        mainListContainer.appendChild(linkButton);
    });

    // --- サブキャラクターのプロフィールを作成（新しく追加） ---
    const subListContainer = document.getElementById('sub-character-list');
    subCharacters.forEach(character => {
        const profileBox = document.createElement('div');
        profileBox.className = 'sub-character-profile';
        
        profileBox.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
        `;
        
        subListContainer.appendChild(profileBox);
    });

});
