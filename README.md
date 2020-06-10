# 製作成品與資源連結
- Pages
	- [index](https://gmwu185.github.io/layout-training-week-06-07-craftsman/index.html)
	- [product](https://gmwu185.github.io/layout-training-week-06-07-craftsman/product.html)
	- [detail](https://gmwu185.github.io/layout-training-week-06-07-craftsman/detail.html)
	- [checkout-1](https://gmwu185.github.io/layout-training-week-06-07-craftsman/checkout-1.html)
	- [checkout-2](https://gmwu185.github.io/layout-training-week-06-07-craftsman/checkout-2.html)
	- [checkout-3](https://gmwu185.github.io/layout-training-week-06-07-craftsman/checkout-3.html)
- Adobe XD 設計稿
	- [第六週-全站](https://xd.adobe.com/view/b251d34b-5ec0-4978-7793-0fd19c2eaad1-c460/grid)

# 做了什麼

## 整體製作特點：
- 專案中圖片使用 `background-image` 方式處理，透過 `background-image` 方式開啟頁面，較不受資料請求回應後開啟頁面的等待。
- 偽元素自適應圖片：使用偽元素處理容器成為圖片的比例，透過容器裁切背景圖片達到自適應效果。
- retina 圖片處理 (1x, 2x, 3x)
  - 配合圖片素材提供的質量規劃，較近於圖片在畫面上的像素對應，原則取用較近實際圖片尺寸象素 (例如畫面圖片寬是 500px 取用 640 px 為 1x 圖片)，可讓頁面戴入時較為順暢，不直接取最高質量而是選用較合適的對應質量單位的圖片為主。
  - 配合較大的滿版圖片直接取用較高質量，考量滿版設計為主。
  - 產品選用 1x ~ 3x 圖片。
  - 優化圖片流量處理，減少圖片戴入時的開啟頁面速度。


## SCSS & Jade
- 透過 Bootstrap 4 斷點 mixin (`@include` `media-breakpoint-up()` & `media-breakpoint-down()`)，直接取用整合到對應的斷點使用 ( `min-w` 與 `max-w` 為主 )。
- 混合先前 jade 迴圈與判斷的部份，在導航列元件上做對應處理，整合到同一支檔中管理，例如： `_c-nav.jade` 檔中做相關頁面判斷對應的 HTML 結構與樣式。
- SCSS 工具類樣式主要針對組合為主 (約七成)，若結構中有主附以元件為主來分類拆分管理。
- jade 依 css className 與 HTML 結構區塊獨立重覆元件，透過 jade 函式與判斷式處理在頁面上對應的結構。


## JS 功能：
- 浮動置頂導航列與側邊選單二個元件，配合自適適斷點處理，整合對應的功能與相關樣式對應。
  - 浮動置頂導航列對應 desktop 斷點，主要分為三種 menu 的型態 (目前頁面、共用內頁、透明顯示視覺背景)
  - 側邊選單以 Bootsrap 的樣式為基底，透過 jQuery 操做動態的收閤樣式。
- 使用 [masonry 插件](https://masonry.desandro.com/layout.html)
  - 整合 Bootstrap 4 格線系統，有別於 Bootstrap 的瀑布流純 CSS 的排版，會由左上 > 左下 > 右上 > 右下 排序，這會收父層元素的高度影響，主要是以垂直排序為主，透過插件直接都由 左上 > 右上 > 下排內元件元素排序，內元件元素可依水平排序為主。
  - 整合偽元素自適應圖片的方式，在 `<img>` tag 戴入時套件需依賴 [imagesLoaded](https://imagesloaded.desandro.com/) 確任圖片戴入完成，`<img>` tag 後取得圖片高寬才可處理定位運算，而此方法因為透過 CSS 預先定好容圖的高度和寬度，不用透過 [imagesLoaded](https://imagesloaded.desandro.com/) 取得元素的高寬數值，直接可讓 JavaScript 做定為處理。
- swiper [中文](https://www.swiper.com.cn/)、[英文](https://swiperjs.com/) (產品 slideShow 插件)
  - `.swiper-container` 的父層使用滿版寬度 ( `width: calc( 50vw - 50% + 100%);` ) 動態計算突出格線系統的寬度，視窗總寬的一半 - 容器寬度的一半 = 取得單邊容器的 `margin` 寬度 + 容器總寬度 - `scoll` 寬度 (不扣要使用 內元件最後一筆的 `margin-right` 推安全邊)。
  - 在 swiper 內元件 (`.swiper-slide`) 上可做較準的定位處理，裡面只放置四筆資料，實際上可以處理多筆，不會讓 window 自適應寬度改變後發生在 swiper 內元件 (`.swiper-slide`) 的定位不準，無法執行回彈最回一筆定位功能問題。
- [checkout-1](https://gmwu185.github.io/layout-training-week-06-07-craftsman/checkout-1.html) 的 Return to cart 按鈕，點按後網址加上參數字串 (`'product.html?modalID=modalRightScrollable'`)，透過 JavaScript 判斷網址帶參數字串，取得 modal 的 ID 名稱，在開啟頁面時直接使用 `.modal('show')` 呼叫 cartList 區塊。


# 字符組
* `-`：(單中線) 相關、關連，可視為 '之' 或是 '的' 的意思，另外也用於駝峰屬性名的樣式名命，比較駝峰命名以單層為主 (較明確之意)。
* `--`：(雙中線) 後接參數或是屬性值。
  * 像是格線系統的樣式名命，使用 `--` 後視為參數調整全部幾等分之幾等分。
  * 狀態變化命名使用於像是背景設定或是 hover 效果等，與容器所使用的樣式獨立出來。
* `__`：(雙下底線) BEM 命名，用於區塊名命後的連結元素，最多不超過四層。


# 前綴與命名
* `.l` : 共用全站區塊或架構 (layout)
  * `.l-nav`、`.l-footer` 共用表頭尾樣式
  * 格線系統 `.l-col-<<斷點代號>>--<<全幾等分>>-<<之幾等分>>`
* `.p` : 特定頁面使用 (page)
* `.c` : 組件化用於多頁面使用 (components)
* `.c-js` / `.js` : 受 JavaScript 所操作組件對象或節點，另外也可視為直接由 JS 操作的樣式名稱。
* `.u` : 工具類樣式，用於調整細部架構或於 HTML 特定元素使用特定斷點等相關樣式 (utils)，與主題樣式只有依附關係所分類獨立。


# Node npm & bower 前端工具，執行指令依序輸入
- `npm install -g bower`
- `bower install`
- `npm install`
- `gulp`
