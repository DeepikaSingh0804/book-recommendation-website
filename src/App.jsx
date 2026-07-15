
import './App.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import { Header} from "./Header/header"
import { Footer } from './Footer/footer'
import { Home } from './Home/home'
import { Genres } from './Genre/Genres/genres'
import { CrimeBook } from "./Genre/Genres-CrimeBooks/crimebooks"
import { Author } from './Authors/authors'
import { Anticipated } from './Anticipated-Books/anticipated-books'
import { HealthBook } from './Health&Fitness/HealthBooks/healthbooks';
import { PoetryBook } from './Poetry/PoetryBooks/poetrybooks';
import { ScienceBook } from './Science/ScienceBooks/sciencebooks';
import { PersonalityBook } from './Personality/PersonalityBooks/personalitybooks';
import { DontBelieveBook } from './Personality/Personality-DontBelieveBook/dontbelievebook';
import { AttitudeIsEverything } from './Personality/Personality-AttitudeIsEverything/attitudeiseverything';
import { PeopleMagnet } from './Personality/Personality-HowToBecomePeopleMagnet/howtobecomepeoplemagnet';
import { SubconciousMind } from './Personality/Personality-PowerOfSubconciosMind/powerofsubconciousmind';
import { ClassicBooks } from './Classic-Books/classicbooks';
import { RomanticBook } from './Genre/Genres-RomanticBooks/romanticbooks';
import { TrendingBooks } from './Trending-Books/trendingbooks';
import { BrowseBooks } from './Browse-Books/browsebooks';
import { YouCanBook } from './Personality/Personality-YouCanBook/youcanbook';
import { MountainBook } from './Personality/Personality-TheMountainBook/themountainbook';
import { PersonalityPlusBook } from './Personality/Personality-PersonalityPlusBook/personalityplusbook';
import { PracticingMindBook } from './Personality/Personality-PracticingMindBook/practicingmindbook';
import { ArtOFDealingBook } from './Personality/Personality-TheArtOfDealingBook/artofdealingbook';
import { GreatestLeadersBook } from './Personality/Personality-GreatestLeaderBook/greatestleaderbook';
import { TalkToAnyoneBook } from './Personality/Personality-TalkToAnyoneBook/talktoanyonebook';
import { HateYouBook } from './Personality/Personality-HateYouBook/hateyoubook';
import { BrahmanBook } from './Science/Science-BhrahmanBook/brahmanbook';
import { RelativityBook } from './Science/Science-RelativityBook/relativitybook';
import { EncyclopediaBook } from './Science/Science-SpaceEncyclopediaBook/encyclopediabook';
import { FutureBook } from './Science/Science-FutureScienceBook/futuresciencebook';
import { UniverseBook } from './Science/Science-IAmTheUniverseBook/iamtheuniversebook';
import { CuriosityBook } from './Science/Science-NcertCuriosity/ncertcuriosity';
import { KnowledgeEncyclopediaBook } from './Science/Science-KnowledgeEncyclopediaBook/knowledgeencyclopediabook';
import { SocialScienceBook } from './Science/Science-NcertSocialScienceBook/socialsciencebook';
import { ScienceRichBook } from './Science/Science-ScienceOfRichBook/scienceofgettingrichbook';
import { MythsToScience } from './Science/Science-MythsToScienceBook/mythstosciencebook';
import { ClockScience } from './Science/Science-1oClockBook/1oclockbook';
import { PlantPathologyBook } from './Science/Science-PlantPathologyBook/plantpathologybook';
import { NinetySevenBook } from './Poetry/Poetry-NinetySevenBook/ninetysevenbook';
import { TheSunBook } from './Poetry/Poetry-TheSunBook/thesunandflowerbook';
import { TheEssentialRumi } from './Poetry/Poetry-TheEssentialRumiBook/theessentialrumibook';
import { TriveniBook } from './Poetry/Poetry-TriveniBook/trivenibook';
import { LvoeBook } from './Poetry/Poetry-LvoeBook/lvoebook';
import { SelectedPoemsBook } from './Poetry/Poetry-SelectedPoemsBook/selectedpoemsbook';
import { BeyondThoughtsBook } from './Poetry/Poetry-BeyondThoughtsBook/beyondthoughtsbook';
import { OneHundredBook } from './Poetry/Poetry-OneHundredBook/onehundredbook';
import { MorningThoughtBook } from './Poetry/Poetry-MorningThoughtsBook/morningthoughtsbook';
import { GreatestPoetryBook } from './Poetry/Poetry-GreatestPoetry/greatestpoetrybook';
import { LeavesOfGrassBook } from './Poetry/Poetry-LeavesOFGrassBook/leavesofgrassbook';
import { HomeBook } from './Poetry/Poetry-HomeBook/homebook';
import { HundredBook } from './Health&Fitness/Health-100BestBook/100bestbook';
import { EasyHealthyBook } from './Health&Fitness/Health-EasyHealthyBook/easyhealthybook';
import { EatUpBook } from './Health&Fitness/Health-EatUpBook/eatupbook';
import { HealthyMind } from './Health&Fitness/Health-HealthyMindBook/healthymindbook';
import { HealthyStart } from './Health&Fitness/Healthy-HealthyStartBook/healthystartbook';
import { GermsBook } from './Health&Fitness/Health-GermsBook/germsbook';
import { MotherhoodBook } from './Health&Fitness/Health-BeginningOfMotherhoodBook/beginningofmotherhood';
import { YuktahaarBook } from './Health&Fitness/Health-YuktahaarBook/yuktahaarbook';
import { CommonsenseBook } from './Health&Fitness/Health-CommonsenseBook/commonsensebook';
import { SatvikBook } from './Health&Fitness/Health-SatvikCookingBook/satvikcookingbook';
import { HealthyHeartBook } from './Health&Fitness/Healthy-HealthyHeartBook/healthyheartbook';
import { EverydayAyurvedaBook } from './Health&Fitness/Health-EverydayAyurvedaBook/everydayayurvedabook';
import { HorrorBook } from './Genre/Genres-HorrorBooks/horrorbooks';
import { ThrillerBook } from './Genre/Genres-ThrillerBooks/thrillerbooks';
import { FantacyBook } from './Genre/Genres-FantacyBooks/fantacybooks';
import { AdventureBook } from './Genre/Genres-AdventureBooks/adventurebooks';
import { FairyTalesBook } from './Genre/Genres-FairyTalesBooks/fairytalesbook';
import { ScienceFictionBook } from './Genre/Genres-ScienceFictionBooks/sciencefictionbooks';
import { WomenFictionBook } from './Genre/Genres-WomenFictionBooks/womenfictionbooks';
import { ShortStoriesBook } from './Genre/Genres-ShortStoriesBooks/shortstoriesbooks';
import { WarBook } from './Genre/Genres-WarBooks/warbooks';
import { AutobiographyBook } from './Genre/Genres-AutobiographyBooks/autobiographybooks';
import { EssayBook } from './Genre/Genres-EssaysBooks/essaybooks';
import { SelfHelpBook } from './Genre/Genres-SelfHelpBooks/selfhelpbooks';
import { PoetryBooks } from './Genre/Genres-PoetryBook/poetrybook';
import { ActionBook } from './Genre/Genres-ActionBooks/actionbooks';
import { SpritualBook } from './Genre/Genres-SpritualBooks/spritualbooks';
import { MythologicalBook } from './Genre/Genres-MythologicalBooks/mythologicalbooks';
import { SanatanBook } from './Genre/Genres-SanatanBooks/sanatanbooks';
import { ComedyBook } from './Genre/Genres-ComedyBooks/comedybooks';
import { About } from './About/about';
import { Signup } from './Signup/signup';
import { Login } from './Login/login';

  
  function App() {
 
      return <>

  <BrowserRouter>
      <Routes>
               <Route path='/' element={<Layout />} > 
               
                       <Route path='/' element={<Home />} />

                       <Route path='/genres' element={<Genres />} />
                        <Route path='/genres/crimebooks' element={<CrimeBook />} />
                        <Route path='/genres/romantic-books' element={<RomanticBook />} />
                        <Route path='/genres/horror-books' element={<HorrorBook />} />
                        <Route path='/genres/thriller-books' element={<ThrillerBook />} />
                        <Route path='/genres/fantacy-books' element={<FantacyBook />} />
                        <Route path='/genres/adventure-books' element={<AdventureBook />} />
                        <Route path='/genres/fairy-tale-books' element={<FairyTalesBook />} />
                        <Route path='/genres/science-fiction-books' element={<ScienceFictionBook />} />
                        <Route path='/genres/women-fiction-books' element={<WomenFictionBook />} />
                        <Route path='/genres/short-stories-books' element={<ShortStoriesBook />} />
                        <Route path='/genres/war-books' element={<WarBook />} />
                        <Route path='/genres/autobiography-books' element={<AutobiographyBook />} />
                        <Route path='/genres/essay-books' element={<EssayBook />} />
                        <Route path='/genres/self-help-books' element={<SelfHelpBook />} />
                        <Route path='/genres/poetry-books' element={<PoetryBooks />} />
                        <Route path='/genres/action-books' element={<ActionBook />} />
                        <Route path='/genres/spiritual-books' element={<SpritualBook />} />
                        <Route path='/genres/mythological-books' element={<MythologicalBook />} />
                        <Route path='/genres/sanatan-books' element={<SanatanBook />} />
                        <Route path='/genres/comedy-books' element={<ComedyBook />} />



                        <Route path = '/authors' element={<Author />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/auth/signup' element={<Signup />} />
                        <Route path='/auth/login' element={<Login />} />

                        <Route path = '/collections/browse-books' element={<BrowseBooks />} />
                        <Route path = '/collections/anticipated-books' element={<Anticipated />} />
                        <Route path='/collections/classic-books' element={<ClassicBooks />} />
                        <Route path='/collections/trending-books' element={<TrendingBooks />} />

                        <Route path='/collections/health-fitness' element={<HealthBook />} />
                        <Route path='/collections/health-fitness/100-Best-Health-Foods' element={<HundredBook />} />
                        <Route path='/collections/health-fitness/Its-Easy-To-Be-Healthy' element={<EasyHealthyBook />} />
                        <Route path='/collections/health-fitness/Eat-Up-Clean-up' element={<EatUpBook />} />
                        <Route path='/collections/health-fitness/Healthy-Mind-Happy-You' element={<HealthyMind />} />
                        <Route path='/collections/health-fitness/Healthy-Start' element={<HealthyStart />} />
                        <Route path='/collections/health-fitness/Germs-Are-Not-For-Sharing' element={<GermsBook />} />
                        <Route path='/collections/health-fitness/Beginning-OF-Motherhood' element={<MotherhoodBook />} />
                        <Route path='/collections/health-fitness/Yuktahaar-The-Belly-And-Brain-Diet' element={<YuktahaarBook />} />
                        <Route path='/collections/health-fitness/The-Commonsense-Diet' element={<CommonsenseBook />} />
                        <Route path='/collections/health-fitness/Sattvik-Cooking' element={<SatvikBook />} />
                        <Route path='/collections/health-fitness/The-Healthy-Heart-Blueprint' element={<HealthyHeartBook />} />
                        <Route path='/collections/health-fitness/Everyday-Ayurveda' element={<EverydayAyurvedaBook />} />



                        <Route path='/collections/poetry' element={<PoetryBook />} />
                        <Route path='/collections/poetry/Ninety-Seven-Poems' element={<NinetySevenBook />} />
                        <Route path='/collections/poetry/The-Sun-And-Her-Flowers' element={<TheSunBook />} />
                        <Route path='/collections/poetry/The-Essential-Rumi' element={<TheEssentialRumi />} />
                        <Route path='/collections/poetry/Triveni' element={<TriveniBook />} />
                        <Route path='/collections/poetry/Lvoe' element={<LvoeBook />} />
                        <Route path='/collections/poetry/Selected-Poems' element={<SelectedPoemsBook />} />
                        <Route path='/collections/poetry/Beyond-Thoughts' element={<BeyondThoughtsBook />} />
                        <Route path='/collections/poetry/One-Hundred-Poems-OF-Kabir' element={<OneHundredBook />} />
                        <Route path='/collections/poetry/A-Morning-Thought-My-Coffee-Brought' element={<MorningThoughtBook />} />
                        <Route path='/collections/poetry/Greatest-Poetry-Ever-Written' element={<GreatestPoetryBook />} />
                        <Route path='/collections/poetry/Leaves-OF-Grass' element={<LeavesOfGrassBook />} />
                         <Route path='/collections/poetry/Home' element={<HomeBook />} />


                        <Route path='/collections/science' element={<ScienceBook />} />
                        <Route path='/collections/science/Brahman-All-This-Whatsoever-That-Moves' element={<BrahmanBook />} />
                        <Route path='/collections/science/Relativity' element={<RelativityBook />} />
                        <Route path='/collections/science/Space-Encyclopedia' element={<EncyclopediaBook />} />
                        <Route path='/collections/science/Future-Science-And-Technology' element={<FutureBook />} />
                        <Route path='/collections/science/I-Am-The-Universe' element={<UniverseBook />} />
                        <Route path='/collections/science/Ncert-Class-8-Curiosity' element={<CuriosityBook />} />
                        <Route path='/collections/science/Knowledge-Encyclopedia-Space' element={<KnowledgeEncyclopediaBook />} />
                        <Route path='/collections/science/Ncert-Social-Science' element={<SocialScienceBook />} />
                        <Route path='/collections/science/The-Science-OF-Getting-Rich' element={<ScienceRichBook />} />
                        <Route path='/collections/science/From-Myths-To-Science' element={<MythsToScience />} />
                        <Route path='/collections/science/1-O-Clock-Science' element={<ClockScience />} />
                        <Route path='/collections/science/Plant-Pathology' element={<PlantPathologyBook />} />
           

                        
                        <Route path='/collections/personality' element={<PersonalityBook />} />
                        <Route path='/collections/personality/Dont-Believe-Everything-You-Think' element={<DontBelieveBook />} />
                        <Route path='/collections/personality/Attitude-Is-Everything' element={<AttitudeIsEverything />} />
                        <Route path='/collections/personality/How-To-Become-A-People-Magnet' element={<PeopleMagnet />} />
                        <Route path='/collections/personality/The-Power-Of-Subconcious-Mind' element={<SubconciousMind />} />
                         <Route path='/collections/personality/You-Can' element={<YouCanBook />} />
                         <Route path='/collections/personality/The-Mountain-Is-You' element={<MountainBook />} />
                        <Route path='/collections/personality/Personality-Plus' element={<PersonalityPlusBook />} />
                        <Route path='/collections/personality/The-Practicing-Mind' element={<PracticingMindBook />} />
                        <Route path='/collections/personality/The-Art-OF-Dealing-With-People' element={<ArtOFDealingBook />} />
                        <Route path='/collections/personality/World-Greatest-Leaders' element={<GreatestLeadersBook />} />
                        <Route path='/collections/personality/How-To-Talk-To-Anyone' element={<TalkToAnyoneBook />} />
                        <Route path='/collections/personality/I-Hate-You-Dont-Leave-Me' element={<HateYouBook />} />
               
               </Route>
      </Routes>
  </BrowserRouter>



      </>
      

 }

 function Layout(){

 const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  return <div>
  
      <Header />

      <Outlet />

      <Footer />
  </div>
 }
     
export default App
