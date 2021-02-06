const frases = [`You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
"No more than 2GB. All files in your account must fit your allotted storage space.","Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.",
"Yes! Send us a message and we’ll process your request no questions asked.","Chat and email support is available 24/7. Phone lines are open during normal business hours."
];

function clicou(id,nFrase,done){
    const headline = document.getElementById(id);
    const h5 = document.getElementById(done);
    const conteudo = document.querySelector('.conteudo');

    
    if(headline.classList.contains('active')){
        headline.classList.remove('active');
        headline.removeChild(h5);


    }
    else{
        const phrase = document.createElement('h5');
        phrase.innerHTML = frases[nFrase];
        headline.appendChild(phrase);
        headline.classList.add('active');
        phrase.setAttribute('id',done);
    }
}
