// スマホ用メニューの開閉
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".global-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // フッターの年号を自動で更新
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // お問い合わせフォーム：ページを移動せずに送信し、完了メッセージを表示
  var form = document.getElementById("contact-form");
  if (form && window.fetch) {
    var status = document.getElementById("form-status");
    var thanks = document.getElementById("form-thanks");
    var button = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      button.disabled = true;
      button.textContent = "送信中…";
      status.hidden = true;

      fetch(form.action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (!data.success) throw new Error(data.message || "error");
          form.hidden = true;
          thanks.hidden = false;
          thanks.scrollIntoView({ behavior: "smooth", block: "center" });
        })
        .catch(function () {
          status.textContent = "送信できませんでした。時間をおいてもう一度お試しいただくか、お試しセッションの予約ページからご連絡ください。";
          status.hidden = false;
          button.disabled = false;
          button.textContent = "送信する";
        });
    });
  }
});
