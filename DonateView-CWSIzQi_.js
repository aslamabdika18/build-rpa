import{f as u,c as s,b as e,g as p,n as x,h as i,F as l,r as c,a as f,t as m,o as n}from"./index-CvKVudfc.js";const b={class:"min-h-screen bg-gradient-to-br from-primary via-secondary to-tertiary py-16"},v={class:"container mx-auto px-4"},k={class:"max-w-3xl mx-auto"},w={class:"bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl mb-8 p-6"},h={class:"grid grid-cols-2 gap-4 mb-6"},C={key:0,class:"space-y-6"},A={class:"flex items-center justify-between mb-4"},S={class:"font-bold text-2xl text-primary"},T={class:"space-y-3"},j={class:"flex items-center justify-between bg-gray-50 p-4 rounded-lg"},R={class:"text-xl font-semibold text-primary"},B=["onClick"],q={key:1,class:"bg-white rounded-xl shadow-md p-8 text-center"},N={class:"mt-8 p-6 bg-gray-50 rounded-xl"},P={class:"text-xl font-semibold text-primary mb-4"},V={class:"list-decimal ml-4 space-y-3 text-gray-600"},_={key:1},$={__name:"DonateView",setup(Q){const a=u("transfer"),o=u(""),g=[{name:"BCA",account:"1234567890"},{name:"Mandiri",account:"0987654321"}],y=async d=>{try{await navigator.clipboard.writeText(d),o.value=d,setTimeout(()=>{o.value=""},2e3)}catch{alert("Gagal menyalin nomor rekening")}};return(d,t)=>(n(),s("div",b,[e("div",v,[e("div",k,[t[17]||(t[17]=e("div",{class:"text-center mb-12 mt-16"},[e("h1",{class:"text-5xl font-bold text-white mb-4 drop-shadow-lg"},"Donasi untuk Kebaikan"),e("p",{class:"text-xl text-white mb-8 drop-shadow"}," Pilih metode pembayaran yang Anda inginkan ")],-1)),e("div",w,[e("div",h,[e("button",{onClick:t[0]||(t[0]=r=>a.value="transfer"),class:x(["flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300",a.value==="transfer"?"bg-primary text-white shadow-lg scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},t[2]||(t[2]=[e("i",{class:"fas fa-credit-card text-lg"},null,-1),i(" Bank Transfer ")]),2),e("button",{onClick:t[1]||(t[1]=r=>a.value="qr"),class:x(["flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300",a.value==="qr"?"bg-primary text-white shadow-lg scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},t[3]||(t[3]=[e("i",{class:"fas fa-qrcode text-lg"},null,-1),i(" QRIS ")]),2)]),a.value==="transfer"?(n(),s("div",C,[(n(),s(l,null,c(g,r=>e("div",{key:r.name,class:"bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"},[e("div",A,[e("div",S,m(r.name),1),t[4]||(t[4]=e("span",{class:"text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"}," Bank Transfer ",-1))]),e("div",T,[t[9]||(t[9]=e("p",{class:"font-medium text-gray-600"},"No. Rekening:",-1)),e("div",j,[e("span",R,m(r.account),1),e("button",{onClick:D=>y(r.account),class:"flex items-center gap-2 text-primary hover:text-secondary transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"},[o.value===r.account?(n(),s(l,{key:0},[t[5]||(t[5]=e("i",{class:"fas fa-check"},null,-1)),t[6]||(t[6]=i(" Tersalin "))],64)):(n(),s(l,{key:1},[t[7]||(t[7]=e("i",{class:"fas fa-copy"},null,-1)),t[8]||(t[8]=i(" Salin "))],64))],8,B)]),t[10]||(t[10]=e("p",{class:"text-primary font-medium"},"a.n. RPA",-1))])])),64))])):p("",!0),a.value==="qr"?(n(),s("div",q,t[11]||(t[11]=[f('<h3 class="text-2xl font-bold text-primary mb-6">QRIS</h3><div class="flex justify-center mb-6"><div class="w-64 h-64 border-2 border-gray-200 rounded-xl flex items-center justify-center bg-gray-50"><i class="fas fa-qrcode text-8xl text-primary"></i></div></div><p class="text-gray-600 mb-3"> Scan QR code menggunakan aplikasi e-wallet atau m-banking Anda </p><p class="text-primary font-medium">a.n. RPA</p>',4)]))):p("",!0),e("div",N,[e("h2",P," Tata Cara "+m(a.value==="transfer"?"Transfer":"Pembayaran")+": ",1),e("ol",V,[a.value==="transfer"?(n(),s(l,{key:0},[t[12]||(t[12]=e("li",null,"Pilih salah satu bank diatas",-1)),t[13]||(t[13]=e("li",null,"Salin nomor rekening yang dituju",-1))],64)):(n(),s("li",_,"Scan QR Code menggunakan aplikasi pembayaran Anda")),t[14]||(t[14]=e("li",null,"Lakukan transfer sesuai nominal yang diinginkan",-1)),t[15]||(t[15]=e("li",null,"Simpan bukti transfer",-1)),t[16]||(t[16]=e("li",null,"Konfirmasi donasi melalui WhatsApp dengan mengirimkan bukti transfer",-1))])])]),t[18]||(t[18]=e("div",{class:"text-center"},[e("a",{href:"https://wa.me/085277600700",target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-8 py-4 text-white bg-primary hover:bg-secondary rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"},[e("i",{class:"fab fa-whatsapp text-xl"}),i(" Konfirmasi via WhatsApp ")])],-1))])])]))}};export{$ as default};
