//Modal windows (pop-ups)
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play-btn");

  playButton.addEventListener("click", () => {
    alert("Audio playback not implemented.");
  });

  document.getElementById("musicians").addEventListener("click", () => {});
});

document.querySelectorAll(".thumbnail").forEach((image) => {
  image.addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalImage = document.createElement("img");
    modalImage.src = this.src;
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    modal.addEventListener("click", () => modal.remove());
  });
});

//Underline links when scrolling
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".space-1, .space");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const link = navLinks[index];

    if (rect.top <= 0 && rect.bottom >= 0) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ポップアップを表示する要素を取得
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closePopupButton = document.getElementById("close-popup");

// ポップアップ2を表示する要素を取得
const popup2 = document.getElementById("popup-2");
const popup2Img = document.getElementById("popup-img-2");
const closePopup2Button = document.getElementById("close-popup-2");

// ポップアップ3を表示する要素を取得
const popup3 = document.getElementById("popup-3");
const popup3Img = document.getElementById("popup-img-3");
const closePopup3Button = document.getElementById("close-popup-3");

// 各ホットスポットの画像を定義
const hotspotImages = {
  "hotspot-1": "imgs/floral-motif.png", // Floral Motifの画像
  "hotspot-2": "imgs/flowering-branches.png", // Flowering Branchesの画像
  "hotspot-3": "imgs/rim.png", // Rimの画像
};

const hotspots2 = {
  "hotspot-4": "imgs/undecorated-interior.png",
  "hotspot-5": "imgs/flared-rim.png",
  "hotspot-6": "imgs/geometric-shapes.png",
};

const hotspots = {
  "hotspot-7": "imgs/musicians.png",
  "hotspot-8": "imgs/flowers.png",
  "hotspot-9": "imgs/dancers.png",
};

// ポップアップを表示する関数
function showPopup(popupElement, popupImgElement, imageUrl) {
  // 他のポップアップが表示されていたら非表示にする
  [popup, popup2, popup3].forEach((popup) => {
    popup.style.display = "none";
  });

  // 対象のポップアップを表示
  popupImgElement.src = imageUrl;
  popupElement.style.display = "flex";
}

// ホットスポットのクリックイベントを設定
document.querySelectorAll(".Hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    const hotspotId = event.target.closest(".Hotspot").getAttribute("slot");
    let imageUrl = null;

    if (hotspotImages[hotspotId]) {
      imageUrl = hotspotImages[hotspotId];
      showPopup(popup, popupImg, imageUrl);
    } else if (hotspots2[hotspotId]) {
      imageUrl = hotspots2[hotspotId];
      showPopup(popup2, popup2Img, imageUrl);
    } else if (hotspots[hotspotId]) {
      imageUrl = hotspots[hotspotId];
      showPopup(popup3, popup3Img, imageUrl);
    }
  });
});

// ポップアップを閉じるイベント
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

closePopup2Button.addEventListener("click", () => {
  popup2.style.display = "none";
});

closePopup3Button.addEventListener("click", () => {
  popup3.style.display = "none";
});
