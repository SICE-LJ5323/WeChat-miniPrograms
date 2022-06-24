# **解忧查询小助手**
## **简介**
- 你是否还在为找不到附近的旅游景点而烦恼？
- 你是否有对校园里近日发生的大事充满了解的欲望？
- 你是否正在为不知道约 Ta 去看最近的哪一场电影而发愁？
- 你是否想通过某个的心仪的 Ta 的身份证前六位，来知晓 Ta 的身份所在地?
- 我们团队开发的这款小程序，或许正适合发愁的你哦。随身随地查一查，获取多元丰富的信息，生活也因此更加充实和有目标了呢 ~
---
## **项目背景和目标**
- 本项目为实现简单查询服务的微信小程序开发
- 我们通过开发这个简易的多元化查询功能小程序旨在给平凡单调的大学生活带来更多有趣的瞬间，让生活有目标，让成长有动力，解决我们出行不知所游的烦恼，也不害怕因学业 忙碌而错过最新上映的大片，同时能够迅速地获取到校园生活的奇闻资讯，给予我们更加放松有趣的生活。
---
## **创意过程**
    疯狂八分钟
- 一个独立的小程序，可以根据校园网更新校内新闻数据，每个人的新闻都是共享的，可以看见彼此的评论；
- 根据所在地查看电影的各种信息，例如猫眼的评分、主演、剧照等，可以根据地区选择影院购票；
- 获取当前位置给出附近的景点以及距离，并且可以点开显示地图上的具体位置； 
- 输入身份证前六位可以自动显示出生地。
---
    四象限法
![项目的四象限图](https://s2.loli.net/2022/06/24/4FAMHnWLhYruzgV.jpg)

---
## **用户分析**
- **目标用户**：在校娱乐的大学生，想丰富大学生活的同学们
- **用户画像**：

![用户画像](https://s2.loli.net/2022/06/24/rh8GXZjQyN5Exis.jpg)
- **痛点——需求点**：根据用户特点分析，归纳一下目标用户的痛点和相对应的需求

    | **痛点**   	| **需求点** |
    | :--: 	| :--: |
    | 周末出游却不知去哪玩 	|  需要能够便捷地查询附近景点  |
    | 不知道最近上映的热播大片和上映影院 	|  希望能了解所在地区热播大片和上映影院，与好友相约看电影  |
    | 不能够随时随地了解校园趣闻 |  能够实时更新校园风云，满足吃瓜好奇心  |
---
## **场景分析**
- **目标用户的使用路径是这样的**：

![场景分析](https://s2.loli.net/2022/06/24/Fjy2CLzBsnOkEgZ.jpg)

---
## **系统功能拆解**
- **根据组件认知与系统功能拆解的核心功能实现的技术分析**：

![系统功能拆解](https://s2.loli.net/2022/06/24/NnfVMj9zFup8XEY.png)

---
## **系统功能架构**
- **系统结构图和流程图**：

![系统功能架构](https://s2.loli.net/2022/06/24/ofXxRiPq9zWwcrC.png)

---
## **功能分析和实现**
- 共分为四个主页面，通过底部 tabbar 导航栏进入不同的主页面，tabbar 上的 icon 点击前后可发生变化

---
### **1. 周边景点-查询页面**
    通过获取登陆用户的定位信息，来自动搜索并通过列表来展示出周围好玩的景点
    景点的详情界面可以看到该景点的地理位置信息，也可以通过搜索地名来发现更多好玩的景点哦
![周边景点列表](https://s2.loli.net/2022/06/24/5y6DeFkG1ap9XoO.png) ![景点详情](https://s2.loli.net/2022/06/24/lNLRaywbXDKut7m.png)
    
- **代码实现**：
```javascript
<!--list.wxml-->
<view class="section">
  <input type='text' placeholder='请输入想要搜索的地名' confirm-type='search' bindconfirm='searchData' />
</view>

<view class='content'>
  <view class='for-item' bindtap='info' wx:for="{{list}}" wx:key="key" id="{{item.id}}" data-distance="{{item.distance}}">
    <view>
      <span class='wmax'>{{item.name}}</span>
    </view>
    <view>
      <span class='wmin'>{{item.level}}A景区</span>
      <span class='wmin'>距离{{item.distance}}km</span>
      <span class='wmid'>{{item.province}}</span>
    </view>
  </view>
</view>

<view class='content'>
  <view class='for-item' bindtap='info' wx:for="{{min}}" wx:key="key" id="{{item.id}}" data-distance="{{item.distance}}">
    <view>
      <span class='wmax'>{{item.name}}</span>
    </view>
    <view>
      <span class='wmin'>{{item.level}}A景区</span>
      <span class='wmin'>距离{{item.distance}}km</span>
      <span class='wmid'>{{item.province}}</span>
    </view>
  </view>
</view>

<view class='content'>
  <view class='for-item' bindtap='info' wx:for="{{mid}}" wx:key="key" id="{{item.id}}" data-distance="{{item.distance}}">
    <view>
      <span class='wmax'>{{item.name}}</span>
    </view>
    <view>
      <span class='wmin'>{{item.level}}A景区</span>
      <span class='wmin'>距离{{item.distance}}km</span>
      <span class='wmid'>{{item.province}}</span>
    </view>
  </view>
</view>

<view class='content'>
  <view class='for-item' bindtap='info' wx:for="{{max}}" wx:key="key" id="{{item.id}}" data-distance="{{item.distance}}">
    <view>
      <span class='wmax'>{{item.name}}</span>
    </view>
    <view>
      <span class='wmin'>{{item.level}}A景区</span>
      <span class='wmin'>距离{{item.distance}}km</span>
      <span class='wmid'>{{item.province}}</span>
    </view>
  </view>
</view>
```
```javascript
<!-- info.wxml -->
<view>
  <view class='name'>
    <span>景区：</span>
    <span>{{name}}</span>
  </view>
  <view class='m'>
    <map id="map" longitude="{{longitude}}" latitude="{{latitude}}" scale="{{distance}}" bindcontroltap="controltap" markers="{{markers}}" bindmarkertap="markertap" bindregionchange="regionchange" show-location></map>
  </view>
</view>
```

```javascript
//list.js
//获取应用实例
const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")

Page({
  data: {
    list: null,
    min: null,
    mil: null,
    max: null,
  },

  onLoad: function () {
    tool.page = this;
    tool.getLocation();
    curl.login();
    curl.getList("");
  },

  location: function () {
    if (tool.getStorage('location')) return;
    curl.getList("");
  },

  onShow: function () {
    console.log('onshow');
    if (tool.getStorage('request') && tool.getStorage('location')) return;
    tool.getLocation();
    curl.login();
    curl.getList("");
  },

  searchData: function (e) {
    var value = e.detail.value;
    console.log(e.detail)
    curl.getList(value);
  },

  info: function (e) {
    tool.setStorage('distance', e.currentTarget.dataset.distance)
    tool.setStorage('list_id', e.currentTarget.id);
    tool.changePage('/info/info');
  }
})
```

```javascript
//info.js
//获取应用实例
const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")
Page({
  data: {
    name: '黄山',
    latitude: 30.060365,
    longitude: 118.173455,
    distance: 12,
    markers: [{
      iconPath: "/image/location.png",
      latitude: 30.060365,
      longitude: 118.173455,
      width: 50,
      height: 50
    }]
  },

  onLoad: function () {
    tool.page = this;
    var id = tool.getStorage('list_id');
    curl.getInfo(id);
  },

  getDistence: function () {
    var distance = tool.getStorage('distance');
    if (distance < 10) {
      distance = 13;
    } else if (distance < 20) {
      distance = 12;
    } else if (distance < 50) {
      distance = 11;
    } else if (distance < 95) {
      distance = 10;
    } else if (distance < 200) {
      distance = 9;
    } else {
      distance = 8;
    }
    return distance;
  },

  makeMap: function (ob) {
    return [{
      iconPath: "/image/location.png",
      latitude: ob.latitude,
      longitude: ob.longitude,
      width: 50,
      height: 50
    }];
  }
})
```

---
### **2. 校园资讯-查询页面**
        校园资讯板块在校园生活中是重要的一部分
        建立了推荐、热点、人际、教学、生活、运动......等板块，通过顶部滚动式导航栏实现，可选择校园新闻资讯的类型
        资讯板块：标题+图片+来源+评论+发布时间，集成展示
![校园资讯](https://s2.loli.net/2022/06/24/b3Fkf8DqdNcG4ut.png)    
- **代码实现**：
```javascript
<!-- news.wxml -->
<view class="content">
  <view class='navbg'>
    <!-- 导航nav-S -->
    <view class='nav'>
      <!-- 可滚动视图区域。 -->
      <!-- scroll-x 	Boolean 	false 	允许横向滚动 -->
      <scroll-view class='scroll-view_H' scroll-x="true">
        <view class='scroll-view_H'>
          <view>
            <view class="{{flag==0?'select':'normal'}}" id='0' bindtap='switchNav'>推荐</view>
          </view>

          <view>
            <view class="{{flag==1?'select':'normal'}}" id='1' bindtap='switchNav'>热点</view>
          </view>

          <view>
            <view class="{{flag==2?'select':'normal'}}" id='2' bindtap='switchNav'>人际</view>
          </view>

          <view>
            <view class="{{flag==3?'select':'normal'}}" id='3' bindtap='switchNav'>教学</view>
          </view>

          <view>
            <view class="{{flag==4?'select':'normal'}}" id='4' bindtap='switchNav'>娱乐</view>
          </view>

          <view>
            <view class="{{flag==5?'select':'normal'}}" id='5' bindtap='switchNav'>生活</view>
          </view>

          <view>
            <view class="{{flag==6?'select':'normal'}}" id='6' bindtap='switchNav'>贴图</view>
          </view>

          <view>
            <view class="{{flag==7?'select':'normal'}}" id='7' bindtap='switchNav'>科研</view>
          </view>

          <view>
            <view class="{{flag==8?'select':'normal'}}" id='8' bindtap='switchNav'>失物</view>
          </view>

          <view>
            <view class="{{flag==9?'select':'normal'}}" id='9' bindtap='switchNav'>运动</view>
          </view>
        </view>
      </scroll-view>
    </view>
    <!-- 导航nav-E -->
    <view class='add'>+</view>
  </view>
  <!-- current 	Number 	0 	当前所在滑块的 index -->
  <!-- 通过swiper的current属性绑定flag，让swiper的index与scroll-view绑定在一起，flag又与id同步，实现点击nav同步swipe的效果 -->
  <swiper current="{{flag}}" style="height:900px">
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
    <swiper-item>
      <news listData="{{news}}" />
    </swiper-item>
  </swiper>
</view>
```

```javascript
// news.js
//获取应用实例
import {
  listData
} from '../../data/data.js'
var app = getApp()

Page({
  data: {
    flag: 0,
    userInfo: {},
    news: null
  },
  onLoad: function () { //加载的时候
    //加载news组件数据
    this.setData({
      news: listData
      // todaynews: todaynewsData
    })
    // console.log(this.data.news+"news")
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },

  //选择哪个nav条，比如北京，社会等
  switchNav: function (e) {
    //拿到id值
    var id = e.target.id;
    var page = this;
    //判断：如果这个swiper的flag值==id值，说明就不进行任何切换了
    if (this.data.flag == id) {
      return false;
    } else {
      //设置值，修改值 setDate    如果swiper进行改变，nav被选中的id也发生改变  
      page.setData({
        flag: id
      });
    }
  },

  //跳转到详情页面
  seeDetail: function () {
    // 路由中的wx.navigateTo(Object object)
    // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})
```

---
### **3. 影视快闻-查询页面**
        年轻人相约一起去看电影，总是少不了近日里上映的热播大片，或是经典影视剧目
        用户可以通过选择所在的城市，来知道近日所在城市的相关影院会上映有哪些电影
        同时也可以一览电影的评分、上映场次、相关演员的等实时获取到的信息
![影视快闻](https://s2.loli.net/2022/06/24/8PrmoKA3T4hct7I.png)
![选择城市](https://s2.loli.net/2022/06/24/cP7AUQBp4Z5YsFE.png)
![电影列表](https://s2.loli.net/2022/06/24/zWk2fA3LmSXvO1M.png)
- **代码实现**：
```javascript
<!-- movie.wxml -->
<view class="container">
  <view class="city">
    <picker mode="region" bindchange="bindRegionChange" value="{{region}}" custom-item="{{customItem}}">
      <view class="picker">
        {{region[1]}}
      </view>
    </picker>
  </view>

  <view class="index">
    <swiper class="swiper_box" indicator-dots="true" autoplay="autoplay" interval="3000" duration="1200" bindchange="swiperchange">
      <block wx:for-items="{{items}}">
        <swiper-item>
          <image src="{{item.img}}" class="slide-image" data-id="{{item.id}}" bindtap="toMoviceDetail" />
        </swiper-item>
      </block>
    </swiper>
  </view>

  <view class="text">
    <view class="line_flag"></view>
    <text>正在上映</text>
  </view>

  <block wx:for-items="{{items}}">
    <view class="flex item" bindtap="toMoviceDetail" data-id="{{item.id}}">
      <view class="item_left">
        <image src="{{item.img}}" />
      </view>

      <view class="flex_auto item_middle">
        <view><text class="title">{{item.nm}}</text></view>
        <view><text class="sub_title">{{item.showInfo}}</text></view>
        <view><text class="actor">{{item.star}}</text></view>
      </view>
      
      <view class="item_right">
        <view><text class="score">{{item.sc}}.分</text></view>
        <view catchtap="toBuyTicks" data-info='{{item}}'><text class="action">{{item.showStateButton.content}}</text></view>
      </view>
    </view>
  </block>
</view>
```

```javascript
//movie.js
//获取应用实例
var app = getApp()
Page({
  data: {
    region: ['北京市', '北京市', '海淀区'], //城市选择器
    cityId: 20, //城市ID
    items: '', //电影列表
    customItem: '选择城市',
    images: []
  },

  onReachBottom() {
    wx.showToast({
      title: '已经到底啦！',
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  swiperchange: function (e) {
    //console.log(e.detail.current)
  },

  bindRegionChange: function (e) {
    const that = this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    wx.request({
      url: 'https://openapi.meituan.com/poi/city', //获取城市ID
      method: 'GET',
      data: {},
      // header: {
      //   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      // },
      success: function (res) {
        console.log(res.data);
        console.log(that.data.region[1])
        for (var k in res.data.data) {
          if (that.data.region[1] == res.data.data[k].name + '市') {
            console.log(res.data.data[k].id)
            that.setData({
              cityId: res.data.data[k].id
            })
          }
        }
      }
    })
    app.globalData.cityId = this.data.cityId;

    this.getMoviceByCity();
  },

  getMoviceByCity(callback) {
    var that = this
    wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList?ci=' + that.data.cityId,
      success(res) {
        for (var i in res.data.movieList) {
          res.data.movieList[i].img = res.data.movieList[i].img.replace(/w.h/g, "372.550");
          res.data.movieList[i].star = res.data.movieList[i].star.replace(/,/g, " / ")
          that.data.images.push(res.data.movieList[i].img)
        }
        console.log(res.data.movieList);
        that.setData({
          images: that.data.images,
          items: res.data.movieList
        })
      }
    })
  },

  toMoviceDetail(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../moviceDetail/moviceDetail?id=' + e.currentTarget.dataset.id,
    })
  },

  onLoad: function () {
    console.log('onLoad')
    console.log(app.globalData.userInfo)
    this.getMoviceByCity();
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  toBuyTicks(e) {
    console.log(e);
    var movieId = e.currentTarget.dataset.info.id;
    var rt = e.currentTarget.dataset.info.rt;
    var movieName = e.currentTarget.dataset.info.nm;
    wx.navigateTo({
      url: `../cinema/cinemaSelect/cinemaSelect?movieId=${movieId}&rt=${rt}&movieName=${movieName}`
    })
  }
})
```

---
### **4. 身份信息-查询页面**
    输入自己的身份证号前六位可查询所属省市地区，他人的也可以哦~
![身份信息](https://s2.loli.net/2022/06/24/kTfo9HUcP15ZmqI.png)
- **代码实现**：
```javascript
<!--index.wxml-->
<view class="section">
  <input type='number' focus='true' placeholder='请输入你的身份证号码前6位' bindinput='selectData' />
</view>

<view class='content'>
  <view class='title'>省：</view>
  <view wx:for="{{shen_data}}" wx:key="key">
    <span class="shen">{{item.n}}</span>
    <span class="shen">{{item.c}}</span>
  </view>

  <view wx:if="{{shi_data}}" class='title'>市：</view>
  <view wx:for="{{shi_data}}" wx:key="key">
    <span class="shen">{{item.n}}</span>
    <span class="shen">{{item.c}}</span>
  </view>
  
  <view wx:if="{{qu_data}}" class='title'>区：</view>
  <view wx:for="{{qu_data}}" wx:key="key">
    <span class="shen">{{item.n}}</span>
    <span class="shen">{{item.c}}</span>
  </view>
</view>
```

```javascript
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    shen_data: null,
    shi_data: null,
    qu_data: null,
  },
  all_data: null,

  onLoad: function () {
    this.all_data = this.data.shen_data = require("./district.data.js").data;
    this.setData({
      shen_data: this.data.shen_data
    })
  },

  selectData: function (e) {
    // console.log(e.detail.value);
    // console.log(this.data.shen_data);
    // console.log(value.length)
    var value = e.detail.value;
    var d = {};

    if (value.length < 2) {
      d = {
        shen_data: this.all_data,
        shi_data: null,
        qu_data: null
      };
    }
    if (value.length == 2) {
      var ob = this.getData(this.data.shen_data, value * 10000);
      console.log(ob);
      d = {
        shen_data: [ob],
        shi_data: ob["d"],
        qu_data: null
      };
    }
    if (value.length == 4) {
      var ob = this.getData(this.data.shen_data[0]["d"], value * 100);
      d = {
        shi_data: [ob],
        qu_data: ob["d"]
      };
    }
    if (value.length == 6) {
      var ob = this.getData(this.data.shi_data[0]["d"], value);
      d = {
        qu_data: [ob]
      };
    }

    this.setData(d);
  },

  getData: function (ob, n) {
    var re = {
      n: '不存在'
    };
    ob.forEach(function (e) {
      // console.log(e);
      if (e.c == n) {
        re = e;
      }
    })
    return re;
  }
})
```

---
## **智慧设计创新网络的构建**
        综合国内外关于智能设计的研究现状和发展趋势，智能设计按设计能力可以分为三个层次：常规设计、联想设计和进化设计。
- **常规设计**：
    
    即设计属性、设计进程、设计策略已经规划好，智能系统在推理机的作用下，调用符号模型（如规则、语义网络、框架等）进行设计。国内外投入应用的智能设计系统大多属于此类，如日本 NEC 公司用于 VLSI 产品布置设计的 Wirex 系统，标准V带传动设计专家系统( JDDES )、压力容器智能 CAD 系统等。这类智能系统常常只能解决定义良好、结构良好的常规问题，故称常规设计。
- **联想设计**：
    
    研究可分为两类：一类是利用工程中已有的设计事例，进行比较，获取现有设计的指导信息，这需要收集大量良好的、可对比的设计事例，对大多数问题是困难的；另一类是利用数值处理能力，从试验数据、计算数据中获得关于设计的隐含知识，以指导设计。这类设计借助于其他事例和设计数据，实现了对常规设计的一定突破，称为联想设计。
- **进化设计**：
    
    遗传算法（GA，即*Geneticalgorithms*）是一种借鉴生物界自然选择和自然进化机制的、高度并行的、随机的、自适应的搜索算法。20世纪80年代早期，遗传算法已在人工搜索、函数优化等方面得到广泛应用，并推广到计算机科学、机械工程等多个领域。我们计划集思广益，借鉴学长们作品，并在其基础上进行优化处理，最终完成该项作品。

---
## **团队成员和团队故事**

| 姓名 | 团队分工 | 贡献度 |
| :--: | :--: | :--: |
| 罗钧 | 制作Word报告，小程序UI设计，开源方案整理归纳 | 50% |
| 谢景扬 | 技术担当，代码开发，海报及调研插图设计，录制视频 | 50% 

- **团队故事**：

        有关这个导论大作业，其实一开始我们是比较迷茫的。
        因为在上学期中我们制定的硬件作业因为我们都没有返回学校，无法一起完成而告吹，
        本来想着一个人做硬件一个人做软件但是又因为组内的一个人转去了别的专业，
        两个人完成所有的项目有些太难了，所以不得已得才改变了我们的大作业形式，改成了一个和原来不同的完全由小程序构成的大作业。
        虽然这个小程序看起来并不是很高端的，但我们一路完成下来克服了许多困难，深入得学习了有关小程序的各种语法结构等，
        一路下来受益匪浅。对于我们而言这个小程序不仅是一个小程序，更是我们小组成员心血的结晶。
