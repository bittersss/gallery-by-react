require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，把所有的图片名转换为图片路径
let imageDatas=require('../data/imageDatas.json');
imageDatas=(function getImageURL(imageDatasArr){
	for(var i=0,j=imageDatasArr.length;i<j;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require('../images'+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


var AppComponent=React.createClass({
	render:function(){
		return(
            <section className="stage">
             <section className="img-sec">
             </section>
             <nav className="controller-nav">
             </nav>
            </section>
		);
	}
}); 
/*class AppComponent extends React.Component 
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}*/

AppComponent.defaultProps = {
};

export default AppComponent;
