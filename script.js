const profileData = {
  name: "Rohan Rana Monger",
  phone: "+97517123456",
  email: "ranamongar17@gmail.com",
  workEmail: "rrmonger@doat.gov.bt",
  website: window.location.href,
  organisation: "Department of Air Transport, Bhutan",
  title: "Aviation Professional | Researcher",
  address: "Thimphu, Bhutan",

  socialLinks: {
    whatsapp: "https://wa.me/qr/22MCYIBETJAZE1",
    linkedin:
      "https://www.linkedin.com/in/rohan-rana-monger-913781305?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    telegram: "https://t.me/RohanRanaMonger",
    facebook: "hhttps://www.facebook.com/share/18u2dWLVA5/",
    instagram:
      "https://www.instagram.com/_e_a_d_g_b_e?utm_source=qr&igsh=ZnBzd2cyZ2Y0ZDRj",
    email: "mailto:ranamongar17@gmail.com",
    researchgate:
      "https://www.researchgate.net/profile/Rohan-Monger-2?ev=hdr_xprf",
  },
};

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function to create social QR codes
function createSocialQR(elementId, link) {
  const element = document.getElementById(elementId);

  if (element) {
    new QRCode(element, {
      text: link,
      width: 95,
      height: 95,
      colorDark: "#061e50",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
}

// Social media QR codes
createSocialQR("whatsappQR", profileData.socialLinks.whatsapp);
createSocialQR("linkedinQR", profileData.socialLinks.linkedin);
createSocialQR("telegramQR", profileData.socialLinks.telegram);
createSocialQR("facebookQR", profileData.socialLinks.facebook);
createSocialQR("instagramQR", profileData.socialLinks.instagram);
createSocialQR("emailQR", profileData.socialLinks.email);
createSocialQR("researchgateQR", profileData.socialLinks.researchgate);
