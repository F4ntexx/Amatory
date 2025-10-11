import { Navbar } from "../components/Navbar";
import Greeting from "../components/fieldsProfile";
import { ButtonsElements } from "../components/buttonsHobby";
import {HabitsElements} from "../components/habits";
export function Profile() {
  return (
    <>
      <div className="h-400 bg-neutral-950 text-white px-5">
        <Navbar />
        <div className="flex flex-col md:gap-20 md:items-center md:justify-center pt-10 items-center">
          <div className="">
            <form className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5 grid-cols-1 ">
                <div className="flex items-center justify-center w-80">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-rose-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 hover:bg-rose-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-rose-500 dark:text-rose-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-rose-500">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <p className="text-xs text-rose-500 ">
                        SVG, PNG, JPG or GIF (MAX. 500x500px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <div className="flex flex-col justify-center">
                  <Greeting
                    name="Artem"
                    surname="Rabets"
                    email="f4ntxx@gmail.com"
                  />
                </div>
              </div>
              <div>
                <h1>Age</h1>
                <select
                  name="age"
                  id="age-select"
                  className="bg-rose-50 text-rose-500 w-80 h-10 border-2 rounded-xl text-center"
                >
                  <option value="">-- Выберите возраст --</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                  <option value="60">60</option>
                  <option value="61">61</option>
                  <option value="62">62</option>
                  <option value="63">63</option>
                  <option value="64">64</option>
                  <option value="65">65</option>
                  <option value="66">66</option>
                  <option value="67">67</option>
                  <option value="68">68</option>
                  <option value="69">69</option>
                  <option value="70">70</option>
                  <option value="71">71</option>
                  <option value="72">72</option>
                  <option value="73">73</option>
                  <option value="74">74</option>
                  <option value="75">75</option>
                  <option value="76">76</option>
                  <option value="77">77</option>
                  <option value="78">78</option>
                  <option value="79">79</option>
                  <option value="80">80</option>
                  <option value="81">81</option>
                  <option value="82">82</option>
                  <option value="83">83</option>
                  <option value="84">84</option>
                  <option value="85">85</option>
                  <option value="86">86</option>
                  <option value="87">87</option>
                  <option value="88">88</option>
                  <option value="89">89</option>
                  <option value="90">90</option>
                  <option value="91">91</option>
                  <option value="92">92</option>
                  <option value="93">93</option>
                  <option value="94">94</option>
                  <option value="95">95</option>
                  <option value="96">96</option>
                  <option value="97">97</option>
                  <option value="98">98</option>
                  <option value="99">99</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div>
                <h1>City:</h1>
                <select
                  name="city"
                  id="city-select"
                  className="bg-rose-50 text-rose-500 w-80 h-10 border-2 rounded-xl text-center"
                >
                  <option value="">-- Выберите город --</option>
                  <option value="minsk">Минск</option>
                  <option value="gomel">Гомель</option>
                  <option value="mogilev">Могилёв</option>
                  <option value="vitebsk">Витебск</option>
                  <option value="grodno">Гродно</option>
                  <option value="brest">Брест</option>
                  <option value="bobruisk">Бобруйск</option>
                  <option value="baranovichi">Барановичи</option>
                  <option value="borisov">Борисов</option>
                  <option value="pinsk">Пинск</option>
                  <option value="orSha">Орша</option>
                  <option value="mozyr">Мозырь</option>
                  <option value="soligorsk">Солигорск</option>
                  <option value="novopolotsk">Новополоцк</option>
                  <option value="molodechno">Молодечно</option>
                  <option value="lida">Лида</option>
                  <option value="marinaGorka">Марьина Горка</option>
                  <option value="kobrin">Кобрин</option>
                  <option value="svetlogorsk">Светлогорск</option>
                  <option value="polotsk">Полоцк</option>
                  <option value="zhlobin">Жлобин</option>
                  <option value="rechitsa">Речица</option>
                  <option value="slutsk">Слуцк</option>
                  <option value="zhodino">Жодино</option>
                  <option value="slonim">Слоним</option>
                  <option value="krichev">Кричев</option>
                  <option value="kalinkovichi">Калинковичи</option>
                  <option value="smorgon">Сморгонь</option>
                  <option value="roGachev">Рогачёв</option>
                  <option value="volkovysk">Волковыск</option>
                  <option value="vileyka">Вилейка</option>
                  <option value="nesvizh">Несвиж</option>
                  <option value="gantsevichi">Ганцевичи</option>
                  <option value="zaslavl">Заславль</option>
                  <option value="mikashevichi">Микашевичи</option>
                  <option value="pruzhany">Пружаны</option>
                  <option value="dzerzhinsk">Дзержинск</option>
                  <option value="ivatsevichi">Ивацевичи</option>
                  <option value="luninets">Лунинец</option>
                  <option value="postavy">Поставы</option>
                  <option value="gorki">Горки</option>
                  <option value="bereza">Береза</option>
                  <option value="novogrudok">Новогрудок</option>
                  <option value="drogichin">Дрогичин</option>
                  <option value="osipovichi">Осиповичи</option>
                  <option value="stolbtsy">Столбцы</option>
                  <option value="glubokoe">Глубокое</option>
                  <option value="lepel">Лепель</option>
                  <option value="berezino">Березино</option>
                  <option value="volozhin">Воложин</option>
                  <option value="dokshytsy">Докшицы</option>
                  <option value="petrikov">Петриков</option>
                  <option value="uzda">Узда</option>
                  <option value="tolochin">Толочин</option>
                  <option value="dubrovno">Дубровно</option>
                  <option value="ushachy">Ушачи</option>
                  <option value="kirovsk">Кировск</option>
                  <option value="zhabinka">Жабинка</option>
                  <option value="sharkovshchina">Шарковщина</option>
                  <option value="kastsyukovichy">Костюковичи</option>
                </select>
              </div>
              <ButtonsElements />
              <HabitsElements />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
