const form = document.querySelector('form');
const btn = document.querySelector('.scroll-top');

btn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formVal = {};
  for (let item of formData.entries()) {
    formVal[item[0]] = item[1];
  }
  const text = `
        【您的订单已经生成】
        ------------------------
        奶茶口味：${formVal.type}
        数量：${formVal.num}
        杯型：${formVal.size}
        甜度：${formVal.sugar}
        免费小料：${formVal["snack-free"] ? formVal["snack-free"] : "-"}
        加价小料：${formVal["snack"] ? formVal["snack"] : "-"}
        是否加冰：${formVal.ice}
        是否去茶底：${formVal["remove-tea"]}
        地址：${formVal.address}
        手机号：${formVal.phone}
        期待送达时间：${formVal.time}
        备注：${formVal.comment}
        支付方式：${formVal["pay-type"]}
    `;
  alert(text);
};
form.addEventListener('submit', onSubmit);