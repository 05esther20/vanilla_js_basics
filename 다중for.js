const nav_date = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    },
      
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intro.html"
    }
]

let mygnb = "";
for(let liea = 0; liea < nav_date.length; liea++ ){
    mygnb += nav_date[liea].gnb_li_href;
}
console.log(mygnb);

let mygnb2 = "";
for(let v in nav_date[0]){
    mygnb2 += nav_date[0][v];

}
console.log(mygnb2);
