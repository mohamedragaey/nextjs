import React, {createContext} from 'react'
import {useRouter} from 'next/router'
import en from './translations/en'
import fr from './translations/fr'
import es from './translations/es'
import de from './translations/de'
import it from './translations/it'

import JonCarr from './images/about/TeamMembers/JonCarr-Harris.jpg'
import swish from './images/about/logos/swish.png'
import tree from './images/about/logos/tree.png'
import WillBrown from './images/about/TeamMembers/WillBrown.jpg'
import arsenal from './images/about/logos/arsenal.png'
import manUnited from './images/about/logos/manunited.png'
import AdrianBevington from './images/about/TeamMembers/AdrianBevington.jpg'
import thefa from './images/about/logos/thefa.png'
import oval from './images/about/logos/oval.png'
import DanielStridsberg from './images/about/TeamMembers/DanielStridsberg.jpg'
import one from './images/about/logos/one.png'
import generationThreeLogo from './images/about/logos/generationThreeLogo.png'
import PeterKenyon from './images/about/TeamMembers/PeterKenyon.jpg'
import chelsse from './images/about/logos/chelsse.png'
import GeorgePennington from './images/about/TeamMembers/GeorgePennington.jpg'
import watford from './images/about/logos/watford.png'
import CherryShah from './images/about/TeamMembers/CherryShah.png'
import macquarie from './images/about/logos/macquarie.png'
import EmilyPerretti from './images/about/TeamMembers/EmilyPerretti.jpeg'
import stgiles from './images/about/logos/stgiles.png'
import DavidHinchliffe from './images/about/TeamMembers/DavidHinchliffe.jpg'
import vm from './images/about/logos/vm.png'
import ReneMeulenstein from './images/about/TeamMembers/ReneMeulenstein.jpg'
import australia from './images/about/logos/australia.png'
import BarryBeckett from './images/about/TeamMembers/BarryBeckett.jpg'
import greystone from './images/about/logos/greystone.png'
import VatsalDesai from './images/about/TeamMembers/VatsalDesai.jpg'
import newcastle from './images/about/logos/newcastle.jpeg'

const ListingContext = createContext({})

const ListingProvider = ({children}) => {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : locale === 'fr' ? fr : locale === 'es' ? es : locale === 'de' ? de : it

  const AdvisorsList = [
    {
      id: 1,
      order: '01',
      title: t.AdvisorsListCRED,
      featured: true,
      list: [t.AdvisorsListCREDUpfront, t.AdvisorsListCREDOffFieldTeamSetup, t.AdvisorsListCREDPlayer, t.AdvisorsListCREDWage, t.AdvisorsListCREDCommercial, t.AdvisorsListCREDFan]
    },
    {
      id: 2,
      order: '02',
      title: t.AdvisorsListAgent,
      featured: false,
      list: [t.AdvisorsListAgentCareerDevelopment, t.AdvisorsListAgentPlayerTransfers, t.AdvisorsListAgentContractNegotiation, t.AdvisorsListAgentSourcingOpportunities, t.AdvisorsListAgentCommercialDeals, t.AdvisorsListAgentLicensing]
    },
    {
      id: 3,
      order: '03',
      title: t.AdvisorsListLawyer,
      featured: false,
      list: [t.AdvisorsListLawyerPowerOfAttorney, t.AdvisorsListLawyerPrenuptial, t.AdvisorsListLawyerContactReview, t.AdvisorsListLawyerLegalConceirge, t.AdvisorsListLawyerTrustDeeds]
    },
    {
      id: 4,
      order: '04',
      title: t.AdvisorsListFinancialAdvisor,
      featured: false,
      list: [t.AdvisorsListFinancialAdvisorFinancialPlan, t.AdvisorsListFinancialAdvisorInvestmentMgment, t.AdvisorsListFinancialAdvisorInvestmentAdvisory, t.AdvisorsListFinancialAdvisorBudgeting, t.AdvisorsListFinancialAdvisorPostCareerPlanning, t.AdvisorsListFinancialAdvisorRealEstate]
    },
    {
      id: 5,
      order: '05',
      title: t.AdvisorsListMarketing,
      featured: false,
      list: [t.AdvisorsListMarketingInfluencerMarketing, t.AdvisorsListMarketingSocialMedia, t.AdvisorsListMarketingBrandDevelopment, t.AdvisorsListMarketingBusinessAdvisory]
    },
    {
      id: 6,
      order: '06',
      title: t.AdvisorsListAccountant,
      featured: false,
      list: [t.AdvisorsListAccountantImageRightsCoSetup, t.AdvisorsListAccountantTaxPlanning, t.AdvisorsListAccountantCompanyAdmin, t.AdvisorsListAccountantTrustSetup]
    }
  ]
  const CredTeamList = [
    {
      id: 1,
      image: JonCarr,
      title: t.CredTeamListJonCarr,
      jobTitle: t.CredTeamListJonCarrJobTitle,
      icons: [swish, tree],
      iconTitles: [t.CredTeamListJonCarrIconTitlesSwish, t.CredTeamListJonCarrIconTitlesKhanAcademy]
    },
    {
      id: 2,
      image: WillBrown,
      title: t.CredTeamListWillBrown,
      jobTitle: t.CredTeamListWillBrownJobTitle,
      icons: [arsenal, manUnited],
      iconTitles: [t.CredTeamListWillBrownIconTitlesArsenal, t.CredTeamListWillBrownIconTitlesManchesterUnited]
    },
    {
      id: 3,
      image: AdrianBevington,
      title: t.CredTeamListAdrianBevington,
      jobTitle: t.CredTeamListAdrianBevingtonJobTitle,
      icons: [thefa, oval],
      iconTitles: [t.CredTeamListAdrianBevingtonIconTitlesTheFA, t.CredTeamListAdrianBevingtonIconTitlesMiddlesbrough]
    },
    {
      id: 4,
      image: DanielStridsberg,
      title: t.CredTeamListDanielStridsberg,
      jobTitle: t.CredTeamListDanielStridsbergJobTitle,
      icons: [one, generationThreeLogo],
      iconTitles: [t.CredTeamListDanielStridsbergIconTitlesOneCapital, t.CredTeamListDanielStridsbergIconTitlesGenerationThree]
    },
    {
      id: 5,
      image: PeterKenyon,
      title: t.CredTeamListPeterKenyon,
      jobTitle: t.CredTeamListPeterKenyonJobTitle,
      icons: [chelsse, manUnited],
      iconTitles: [t.CredTeamListPeterKenyonIconTitlesChelsea, t.CredTeamListPeterKenyonIconTitlesManchesterUnited]
    },
    {
      id: 6,
      image: GeorgePennington,
      title: t.CredTeamListGeorgePennington,
      jobTitle: t.CredTeamListGeorgePenningtonJobTitle,
      icons: [thefa, watford],
      iconTitles: [t.CredTeamListGeorgePenningtonIconTitlesTheFA, t.CredTeamListGeorgePenningtonIconTitlesWatford]
    },
    {
      id: 9,
      image: CherryShah,
      title: t.CredTeamListCherryShah,
      jobTitle: t.CredTeamListCherryShahJobTitle,
      icons: [swish, macquarie],
      iconTitles: [t.CredTeamListCherryShahIconTitlesSwish, t.CredTeamListCherryShahIconTitlesMacquarie]
    },
    {
      id: 10,
      image: EmilyPerretti,
      title: t.CredTeamListEmilyPerretti,
      jobTitle: t.CredTeamListEmilyPerrettiJobTitle,
      icons: [stgiles],
      iconTitles: [t.CredTeamListEmilyPerrettiStGiles]
    },
    {
      id: 8,
      image: DavidHinchliffe,
      title: t.CredTeamListDavidHinchliffe,
      jobTitle: t.CredTeamListDavidHinchliffeJobTitle,
      icons: [vm],
      iconTitles: [t.CredTeamListDavidHinchliffeWalkerMorris]
    },
    {
      id: 7,
      image: ReneMeulenstein,
      title: t.CredTeamListReneMeulenstein,
      jobTitle: t.CredTeamListReneMeulensteinJobTitle,
      icons: [manUnited, australia],
      iconTitles: [t.CredTeamListReneMeulensteinIconTitlesManchesterUnited, t.CredTeamListReneMeulensteinIconTitlesAustraliaSocceroos]
    },
    {
      id: 11,
      image: BarryBeckett,
      title: t.CredTeamListBarryBeckett,
      jobTitle: t.CredTeamListBarryBeckettJobTitle,
      icons: [greystone],
      iconTitles: [t.CredTeamListBarryBeckettIconTitlesGreystone]
    },
    {
      id: 12,
      image: VatsalDesai,
      title: t.CredTeamListVatsalDesai,
      jobTitle: t.CredTeamListVatsalDesaiJobTitle,
      icons: [newcastle],
      iconTitles: [t.CredTeamListVatsalDesaiIconTitlesNewcastleUniversity]
    }
  ]

  return (
    <ListingContext.Provider value={{
      AdvisorsList,
      CredTeamList
    }}>
      {children}
    </ListingContext.Provider>
  )
}
const ListingConsumer = ListingContext.Consumer

export {ListingProvider, ListingConsumer}
