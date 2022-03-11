<template>
  <div class="min">
    <Header title="喵喵影院"></Header>
     <div class="nav">
            <div class="city">
                <div class="cityl iconfont">
                    全城&#xe642;
                    <ul class="mapl">
                        <div>
                            <li>上海 </li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>北京</li>
                        </div>
                        <div>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="city">
                <div class="cityl iconfont">
                    品牌&#xe642;
                    <ul class="mapl">
                        <div>
                            <li>上海 </li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>北京</li>
                        </div>
                        <div>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="city">
                <div class="cityl iconfont">
                    特色&#xe642;
                    <ul class="mapl">
                        <div>
                            <li>上海 </li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>北京</li>
                        </div>
                        <div>
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                            <li>E</li>
                            <li>F</li>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
        <Clist/>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Clist from "@/components/Clist";
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar,
    Clist,
  },
};
</script>

<style scoped>
.min .nav {
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #999;
    background:#fff;
    position:fixed ;
    top: 60px;
    left: 0;
}

.min .nav .city {
    position: relative;
}

.min .mapl {
    display: none;
}

.min .cityl:hover .mapl {
    position: absolute;
    background: #fff;
    display: flex;
    justify-content: space-between;
}

.nav .city {
    font-size: 24px;
}

.active {
    border-bottom: 4px solid rgb(246, 59, 34);
}

.min .nav .nowplay h2,
.min .nav .comingplay h2,
.min .nav .search {
    font-size: 20px;
    font-weight: normal;
}

.min .nav .search {
    color: rgb(246, 59, 34);
    font-weight: bold;
}
</style>