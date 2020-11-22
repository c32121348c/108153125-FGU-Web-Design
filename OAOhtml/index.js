let Html = function (tag) {
    let el = document.createElement(tag);
    
    return {
      get node(){return el;},
  
      appendChild(node) {
        el.appendChild(node);
  
        return this;
      },
  
      setAttribute(attribute, value) {
        el[attribute] = value;
  
        return this;
      },
  
      setClass(cls) {
        el.className = cls;
  
        return this;
      },
      //-------------自訂新的屬性----------
      setFor(aaa) {
        el.for = aaa;
  
        return this;
      },
      setId(aaa) {
        el.id = aaa;
  
        return this;
      },
      setType(aaa) {
        el.type = aaa;
  
        return this;
      },
      setPlaceholder(aaa) {
        el.placeholder = aaa;
  
        return this;
      },
    };
};


window.addEventListener('load', () => {
    let siteTitle = Html('h1').setAttribute('innerHTML', 'Drafting');
    let siteSubtitle = Html('h3').setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');
    let siteBanner = Html('header').setClass('site-banner').appendChild(siteTitle.node).appendChild(siteSubtitle.node);
    let siteStatus = Html('header').setClass('site-status').setAttribute('innerHTML', '<span> x:<span id="cursor-x">0</span> y:<span id="cursor-y">0</span> </span>');
    let siteBody = Html('article').setClass('site-body').appendChild(siteStatus.node);
    let copyright = Html('small').setClass('float-right').setAttribute('innerHTML', '&copy; Copyright 2020，佛光大學資訊應用學系');
    let siteFooter = Html('footer').setClass('site-footer').appendChild(copyright.node);
    let siteContainer = Html('div').setClass('site-container').appendChild(siteBanner.node).appendChild(siteBody.node).appendChild(siteFooter.node);
    document.body.appendChild(siteContainer.node); //在body上放siteContainer
    
    let cardTitle = Html('span').setAttribute('textContent', 'Drafting!');
    let cardHeader = Html('header').setClass('card-header').appendChild(cardTitle.node);
    //---------------------------------------------------------------------------------
    let cardInput4 = Html('input').setClass('input').setId('dp').setType('number').setPlaceholder('1');
    let cardP4 = Html('p').setClass('control').appendChild(cardInput4.node);
    let cardLabel4 = Html('label').setClass('control-label').setFor('dp').setAttribute('innerHTML', '防禦力 (dp)');
    let cardDiv4 = Html('div').setClass('h-field').appendChild(cardLabel4.node).appendChild(cardP4.node);

    let cardInput3 = Html('input').setClass('input').setId('ap').setType('number').setPlaceholder('5');
    let cardP3 = Html('p').setClass('control').appendChild(cardInput3.node);
    let cardLabel3 = Html('label').setClass('control-label').setFor('ap').setAttribute('innerHTML', '攻擊力 (ap)');
    let cardDiv3 = Html('div').setClass('h-field').appendChild(cardLabel3.node).appendChild(cardP3.node);

    let cardInput2 = Html('input').setClass('input').setId('hp').setType('number').setPlaceholder('10');
    let cardP2 = Html('p').setClass('control').appendChild(cardInput2.node);
    let cardLabel2 = Html('label').setClass('control-label').setFor('hp').setAttribute('innerHTML', '血量 (hp)');
    let cardDiv2 = Html('div').setClass('h-field').appendChild(cardLabel2.node).appendChild(cardP2.node);

    let cardInput1 = Html('input').setClass('input').setId('name').setType('text').setPlaceholder('村民A');
    let cardP1 = Html('p').setClass('control').appendChild(cardInput1.node);
    let cardLabel1 = Html('label').setClass('control-label').setFor('name').setAttribute('innerHTML', '姓名');
    let cardDiv1 = Html('div').setClass('h-field').appendChild(cardLabel1.node).appendChild(cardP1.node);

    let cardDiv = Html('div').setClass('pane').appendChild(cardDiv1.node).appendChild(cardDiv2.node).appendChild(cardDiv3.node).appendChild(cardDiv4.node); //放上4排input
    //----------------------------------------------------------------------------------
    let cardContent = Html('article').setClass('card-content').appendChild(cardDiv.node);
    let cardDesktop = Html('section').setClass('card').appendChild(cardHeader.node).appendChild(cardContent.node);
    document.querySelector('.site-body').appendChild(cardDesktop.node); //在article裡的site-body上放cardDesktop

    document.querySelector('html').addEventListener('mousemove', (e) => {
        document.getElementById('cursor-x').textContent = e.clientX;
        document.getElementById('cursor-y').textContent = e.clientY;
    }); //滑鼠座標
})