import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Classnotes from "./components/Classnotes";
import Announcements from "./components/Announcements";
import Challenges from "./components/Challenges";
import Internships from "./components/Internships";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Assignments from "./components/Assignments";
import About from "./components/About";
import Semesters_cse from "./components/semesters/Semesters_cse";
import Semesters_It from "./components/semesters/Semesters_It";
import Semesters_ece from "./components/semesters/Semesters_ece";
import Semesters_ee from "./components/semesters/Semesters_ee";
import Sem_task_cse from "./components/semesters/Sem_task_cse";
import Sem_task_it from "./components/semesters/Sem_task_it";
import Sem_task_ece from "./components/semesters/Sem_task_ece";
import Sem_task_ee from "./components/semesters/Sem_task_ee";
import Sem_3_cse from "./components/subjects/Sem_3_cse";
import Sem_3_it from "./components/subjects/Sem_3_it";
import Sem_3_ece from "./components/subjects/Sem_3_ece";
import Sem_3_ee from "./components/subjects/Sem_3_ee";
import Sem_3_task_cse from "./components/subjects/Sem_3_task_cse";
import Sem_3_task_it from "./components/subjects/Sem_3_task_it";
import Sem_3_task_ece from "./components/subjects/Sem_3_task_ece";
import Sem_3_task_ee from "./components/subjects/Sem_3_task_ee";
import Sem_1_cse from "./components/subjects/Sem_1_cse";
import Sem_1_it from "./components/subjects/Sem_1_it";
import Sem_1_ece from "./components/subjects/Sem_1_ece";
import Sem_1_ee from "./components/subjects/Sem_1_ee";
import Sem_1_task_cse from "./components/subjects/Sem_1_task_cse";
import Sem_1_task_it from "./components/subjects/Sem_1_task_it";
import Sem_1_task_ece from "./components/subjects/Sem_1_task_ece";
import Sem_1_task_ee from "./components/subjects/Sem_1_task_ee";
import Sem_2_cse from "./components/subjects/Sem_2_cse";
import Sem_2_it from "./components/subjects/Sem_2_it";
import Sem_2_ece from "./components/subjects/Sem_2_ece";
import Sem_2_ee from "./components/subjects/Sem_2_ee";
import Sem_2_task_cse from "./components/subjects/Sem_2_task_cse";
import Sem_2_task_it from "./components/subjects/Sem_2_task_it";
import Sem_2_task_ece from "./components/subjects/Sem_2_task_ece";
import Sem_2_task_ee from "./components/subjects/Sem_2_task_ee";
import Sem_4_cse from "./components/subjects/Sem_4_cse";
import Sem_4_it from "./components/subjects/Sem_4_it";
import Sem_4_ece from "./components/subjects/Sem_4_ece";
import Sem_4_ee from "./components/subjects/Sem_4_ee";
import Sem_4_task_cse from "./components/subjects/Sem_4_task_cse";
import Sem_4_task_it from "./components/subjects/Sem_4_task_it";
import Sem_4_task_ece from "./components/subjects/Sem_4_task_ece";
import Sem_4_task_ee from "./components/subjects/Sem_4_task_ee";
import Sem_5_cse from "./components/subjects/Sem_5_cse";
import Sem_5_it from "./components/subjects/Sem_5_it";
import Sem_5_ece from "./components/subjects/Sem_5_ece";
import Sem_5_task_cse from "./components/subjects/Sem_5_task_cse";
import Sem_5_task_it from "./components/subjects/Sem_5_task_it";
import Sem_5_task_ece from "./components/subjects/Sem_5_task_ece";
import Sem_5_task_ee from "./components/subjects/Sem_5_task_ee";
import Sem_5_ee from "./components/subjects/Sem_5_ee";
import Sem_6_cse from "./components/subjects/Sem_6_cse";
import Sem_6_it from "./components/subjects/Sem_6_it";
import Sem_6_ece from "./components/subjects/Sem_6_ece";
import Sem_6_ee from "./components/subjects/Sem_6_ee";
import Sem_6_task_cse from "./components/subjects/Sem_6_task_cse";
import Sem_6_task_it from "./components/subjects/Sem_6_task_it";
import Sem_6_task_ece from "./components/subjects/Sem_6_task_ece";
import Sem_6_task_ee from "./components/subjects/Sem_6_task_ee";
import Sem_7_cse from "./components/subjects/Sem_7_cse";
import Sem_7_it from "./components/subjects/Sem_7_it";
import Sem_7_ece from "./components/subjects/Sem_7_ece";
import Sem_7_ee from "./components/subjects/Sem_7_ee";
import Sem_7_task_cse from "./components/subjects/Sem_7_task_cse";
import Sem_7_task_it from "./components/subjects/Sem_7_task_it";
import Sem_7_task_ece from "./components/subjects/Sem_7_task_ece";
import Sem_7_task_ee from "./components/subjects/Sem_7_task_ee";
import Sem_8_cse from "./components/subjects/Sem_8_cse";
import Sem_8_it from "./components/subjects/Sem_8_it";
import Sem_8_ece from "./components/subjects/Sem_8_ece";
import Sem_8_ee from "./components/subjects/Sem_8_ee";
import Sem_8_task_cse from "./components/subjects/Sem_8_task_cse";
import Sem_8_task_it from "./components/subjects/Sem_8_task_it";
import Sem_8_task_ece from "./components/subjects/Sem_8_task_ece";
import Sem_8_task_ee from "./components/subjects/Sem_8_task_ee";
import CO_CSE from "./components/core/sem3/cse/CO_CSE";
import CO_TASK_CSE from "./components/core/sem3/cse/CO_task_cse";
import DSA_CSE from "./components/core/sem3/cse/DSA_CSE";
import DSA_TASK_CSE from "./components/core/sem3/cse/DSA_task_cse";
import ADE_CSE from "./components/core/sem3/cse/ADE_CSE.js";
import ADE_TASK_CSE from "./components/core/sem3/cse/ADE_task_cse";
import MATH_CSE from "./components/core/sem3/cse/MATH_CSE";
import MATH_TASK_CSE from "./components/core/sem3/cse/MATH_task_cse";
import EFE_CSE from "./components/core/sem3/cse/EFE_CSE";
import EFE_TASK_CSE from "./components/core/sem3/cse/EFE_task_cse";
import ITW_CSE from "./components/core/sem3/cse/ITW_CSE";
import ITW_TASK_CSE from "./components/core/sem3/cse/ITW_task_cse";
import CO_IT from "./components/core/sem3/it/CO_IT";
import CO_task_it from "./components/core/sem3/it/CO_task_it";
import DSA_IT from "./components/core/sem3/it/DSA_IT";
import DSA_task_it from "./components/core/sem3/it/DSA_task_it";
import ADE_IT from "./components/core/sem3/it/ADE_IT";
import ADE_task_it from "./components/core/sem3/it/ADE_task_it";
import MATH_IT from "./components/core/sem3/it/MATH_IT";
import MATH_task_it from "./components/core/sem3/it/MATH_task_it";
import EFE_IT from "./components/core/sem3/it/EFE_IT";
import EFE_task_it from "./components/core/sem3/it/EFE_task_it";
import ITW_IT from "./components/core/sem3/it/ITW_IT";
import ITW_task_it from "./components/core/sem3/it/ITW_task_it";
import NT_ECE from "./components/core/sem3/ece/NT_ECE";
import NT_TASK_ECE from "./components/core/sem3/ece/NT_task_ece";
import ED_ECE from "./components/core/sem3/ece/ED_ECE";
import ED_TASK_ECE from "./components/core/sem3/ece/ED_task_ece";
import SS_ECE from "./components/core/sem3/ece/SS_ECE";
import SS_TASK_ECE from "./components/core/sem3/ece/SS_task_ece";
import DSD_ECE from "./components/core/sem3/ece/DSD_ECE";
import DSD_TASK_ECE from "./components/core/sem3/ece/DSD_task_ece";
import DSA_TASK_ECE from "./components/core/sem3/ece/DSA_task_ece";
import DSA_ECE from "./components/core/sem3/ece/DSA_ECE";
import MATH_ECE from "./components/core/sem3/ece/MATH_ECE";
import MATH_TASK_ECE from "./components/core/sem3/ece/MATH_task_ece";
import ES_ECE from "./components/core/sem3/ece/ES_ECE";
import ES_TASK_ECE from "./components/core/sem3/ece/ES_task_ece";
import ECT_EE from "./components/core/sem3/ee/ECT_EE";
import ECT_TASK_EE from "./components/core/sem3/ee/ECT_task_ee";
import MATH_EE from "./components/core/sem3/ee/MATH_EE";
import MATH_TASK_EE from "./components/core/sem3/ee/MATH_task_ee";
import EFT_EE from "./components/core/sem3/ee/EFT_EE";
import EFT_TASK_EE from "./components/core/sem3/ee/EFT_task_ee";
import AE_EE from "./components/core/sem3/ee/AE_EE";
import AE_TASK_EE from "./components/core/sem3/ee/AE_task_ee";
import EM_EE from "./components/core/sem3/ee/EM_EE";
import EM_TASK_EE from "./components/core/sem3/ee/EM_task_ee";
import BFE_EE from "./components/core/sem3/ee/BFE_EE";
import BFE_TASK_EE from "./components/core/sem3/ee/BFE_task_ee";
import IC_EE from "./components/core/sem3/ee/IC_EE";
import IC_TASK_EE from "./components/core/sem3/ee/IC_task_ee";
import NM_EE from "./components/core/sem3/ee/NM_EE";
import NM_TASK_EE from "./components/core/sem3/ee/NM_task_ee";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <Navbar />
          <About />
        </Route>

        <Route path="/assignments">
          <Navbar />
          <Assignments />
        </Route>

        <Route path="/classnotes">
          <Navbar />
          <Classnotes />
        </Route>

        <Route path="/announcements">
          <Navbar />
          <Announcements />
        </Route>

        <Route path="/challenges">
          <Navbar />
          <Challenges />
        </Route>

        <Route path="/internships">
          <Navbar />
          <Internships />
        </Route>

        <Route path="/courses">
          <Navbar />
          <Courses />
        </Route>

        <Route path="/contact">
          <Navbar />
          <Contact />
        </Route>

        <Route path="/sem_cse">
          <Navbar />
          <Semesters_cse />
        </Route>

        <Route path="/sem_It">
          <Navbar />
          <Semesters_It />
        </Route>

        <Route path="/sem_ece">
          <Navbar />
          <Semesters_ece />
        </Route>

        <Route path="/sem_ee">
          <Navbar />
          <Semesters_ee />
        </Route>

        <Route path="/sem_task_cse">
          <Navbar />
          <Sem_task_cse />
        </Route>

        <Route path="/sem_task_it">
          <Navbar />
          <Sem_task_it />
        </Route>

        <Route path="/sem_task_ece">
          <Navbar />
          <Sem_task_ece />
        </Route>

        <Route path="/sem_task_ee">
          <Navbar />
          <Sem_task_ee />
        </Route>

        <Route path="/sem_1_cse">
          <Navbar />
          <Sem_1_cse />
        </Route>

        <Route path="/sem_1_it">
          <Navbar />
          <Sem_1_it />
        </Route>

        <Route path="/sem_1_ece">
          <Navbar />
          <Sem_1_ece />
        </Route>

        <Route path="/sem_1_ee">
          <Navbar />
          <Sem_1_ee />
        </Route>

        <Route path="/sem_1_task_cse">
          <Navbar />
          <Sem_1_task_cse />
        </Route>

        <Route path="/sem_1_task_it">
          <Navbar />
          <Sem_1_task_it />
        </Route>

        <Route path="/sem_1_task_ece">
          <Navbar />
          <Sem_1_task_ece />
        </Route>

        <Route path="/sem_1_task_ee">
          <Navbar />
          <Sem_1_task_ee />
        </Route>

        <Route path="/sem_2_cse">
          <Navbar />
          <Sem_2_cse />
        </Route>

        <Route path="/sem_2_it">
          <Navbar />
          <Sem_2_it />
        </Route>

        <Route path="/sem_2_ece">
          <Navbar />
          <Sem_2_ece />
        </Route>

        <Route path="/sem_2_ee">
          <Navbar />
          <Sem_2_ee />
        </Route>

        <Route path="/sem_2_task_cse">
          <Navbar />
          <Sem_2_task_cse />
        </Route>

        <Route path="/sem_2_task_it">
          <Navbar />
          <Sem_2_task_it />
        </Route>

        <Route path="/sem_2_task_ece">
          <Navbar />
          <Sem_2_task_ece />
        </Route>

        <Route path="/sem_2_task_ee">
          <Navbar />
          <Sem_2_task_ee />
        </Route>

        <Route path="/sem_3_cse">
          <Navbar />
          <Sem_3_cse />
        </Route>

        <Route path="/sem_3_it">
          <Navbar />
          <Sem_3_it />
        </Route>

        <Route path="/sem_3_ece">
          <Navbar />
          <Sem_3_ece />
        </Route>

        <Route path="/sem_3_ee">
          <Navbar />
          <Sem_3_ee />
        </Route>

        <Route path="/sem_3_task_cse">
          <Navbar />
          <Sem_3_task_cse />
        </Route>

        <Route path="/sem_3_task_it">
          <Navbar />
          <Sem_3_task_it />
        </Route>

        <Route path="/sem_3_task_ece">
          <Navbar />
          <Sem_3_task_ece />
        </Route>

        <Route path="/sem_3_task_ee">
          <Navbar />
          <Sem_3_task_ee />
        </Route>

        <Route path="/sem_4_cse">
          <Navbar />
          <Sem_4_cse />
        </Route>

        <Route path="/sem_4_it">
          <Navbar />
          <Sem_4_it />
        </Route>

        <Route path="/sem_4_ece">
          <Navbar />
          <Sem_4_ece />
        </Route>

        <Route path="/sem_4_ee">
          <Navbar />
          <Sem_4_ee />
        </Route>

        <Route path="/sem_4_task_cse">
          <Navbar />
          <Sem_4_task_cse />
        </Route>

        <Route path="/sem_4_task_it">
          <Navbar />
          <Sem_4_task_it />
        </Route>

        <Route path="/sem_4_task_ece">
          <Navbar />
          <Sem_4_task_ece />
        </Route>

        <Route path="/sem_4_task_ee">
          <Navbar />
          <Sem_4_task_ee />
        </Route>

        <Route path="/sem_5_cse">
          <Navbar />
          <Sem_5_cse />
        </Route>

        <Route path="/sem_5_it">
          <Navbar />
          <Sem_5_it />
        </Route>

        <Route path="/sem_5_ece">
          <Navbar />
          <Sem_5_ece />
        </Route>

        <Route path="/sem_5_ee">
          <Navbar />
          <Sem_5_ee />
        </Route>

        <Route path="/sem_5_task_cse">
          <Navbar />
          <Sem_5_task_cse />
        </Route>

        <Route path="/sem_5_task_it">
          <Navbar />
          <Sem_5_task_it />
        </Route>

        <Route path="/sem_5_task_ece">
          <Navbar />
          <Sem_5_task_ece />
        </Route>

        <Route path="/sem_5_task_ee">
          <Navbar />
          <Sem_5_task_ee />
        </Route>

        <Route path="/sem_6_cse">
          <Navbar />
          <Sem_6_cse />
        </Route>

        <Route path="/sem_6_it">
          <Navbar />
          <Sem_6_it />
        </Route>

        <Route path="/sem_6_ece">
          <Navbar />
          <Sem_6_ece />
        </Route>

        <Route path="/sem_6_ee">
          <Navbar />
          <Sem_6_ee />
        </Route>

        <Route path="/sem_6_task_cse">
          <Navbar />
          <Sem_6_task_cse />
        </Route>

        <Route path="/sem_6_task_it">
          <Navbar />
          <Sem_6_task_it />
        </Route>

        <Route path="/sem_6_task_ece">
          <Navbar />
          <Sem_6_task_ece />
        </Route>

        <Route path="/sem_6_task_ee">
          <Navbar />
          <Sem_6_task_ee />
        </Route>

        <Route path="/sem_7_cse">
          <Navbar />
          <Sem_7_cse />
        </Route>

        <Route path="/sem_7_it">
          <Navbar />
          <Sem_7_it />
        </Route>

        <Route path="/sem_7_ece">
          <Navbar />
          <Sem_7_ece />
        </Route>

        <Route path="/sem_7_ee">
          <Navbar />
          <Sem_7_ee />
        </Route>

        <Route path="/sem_7_task_cse">
          <Navbar />
          <Sem_7_task_cse />
        </Route>

        <Route path="/sem_7_task_it">
          <Navbar />
          <Sem_7_task_it />
        </Route>

        <Route path="/sem_7_task_ece">
          <Navbar />
          <Sem_7_task_ece />
        </Route>

        <Route path="/sem_7_task_ee">
          <Navbar />
          <Sem_7_task_ee />
        </Route>

        <Route path="/sem_8_cse">
          <Navbar />
          <Sem_8_cse />
        </Route>

        <Route path="/sem_8_it">
          <Navbar />
          <Sem_8_it />
        </Route>

        <Route path="/sem_8_ece">
          <Navbar />
          <Sem_8_ece />
        </Route>

        <Route path="/sem_8_ee">
          <Navbar />
          <Sem_8_ee />
        </Route>

        <Route path="/sem_8_task_cse">
          <Navbar />
          <Sem_8_task_cse />
        </Route>

        <Route path="/sem_8_task_it">
          <Navbar />
          <Sem_8_task_it />
        </Route>

        <Route path="/sem_8_task_ece">
          <Navbar />
          <Sem_8_task_ece />
        </Route>

        <Route path="/sem_8_task_ee">
          <Navbar />
          <Sem_8_task_ee />
        </Route>

        <Route path="/CO_CSE">
          <Navbar />
          <CO_CSE />
        </Route>

        <Route path="/co_task_cse">
          <Navbar />
          <CO_TASK_CSE />
        </Route>

        <Route path="/dsa_cse">
          <Navbar />
          <DSA_CSE />
        </Route>

        <Route path="/dsa_task_cse">
          <Navbar />
          <DSA_TASK_CSE />
        </Route>

        <Route path="/ade_cse">
          <Navbar />
          <ADE_CSE />
        </Route>

        <Route path="/ade_task_cse">
          <Navbar />
          <ADE_TASK_CSE />
        </Route>

        <Route path="/math_cse">
          <Navbar />
          <MATH_CSE />
        </Route>

        <Route path="/math_task_cse">
          <Navbar />
          <MATH_TASK_CSE />
        </Route>

        <Route path="/efe_cse">
          <Navbar />
          <EFE_CSE />
        </Route>

        <Route path="/efe_task_cse">
          <Navbar />
          <EFE_TASK_CSE />
        </Route>

        <Route path="/itw_cse">
          <Navbar />
          <ITW_CSE />
        </Route>

        <Route path="/itw_task_cse">
          <Navbar />
          <ITW_TASK_CSE />
        </Route>

        <Route path="/co_it">
          <Navbar />
          <CO_IT />
        </Route>

        <Route path="/co_task_it">
          <Navbar />
          <CO_task_it />
        </Route>

        <Route path="/dsa_it">
          <Navbar />
          <DSA_IT />
        </Route>

        <Route path="/dsa_task_it">
          <Navbar />
          <DSA_task_it />
        </Route>

        <Route path="/ade_it">
          <Navbar />
          <ADE_IT />
        </Route>

        <Route path="/ade_task_it">
          <Navbar />
          <ADE_task_it />
        </Route>

        <Route path="/math_it">
          <Navbar />
          <MATH_IT />
        </Route>

        <Route path="/math_task_it">
          <Navbar />
          <MATH_task_it />
        </Route>

        <Route path="/efe_it">
          <Navbar />
          <EFE_IT />
        </Route>

        <Route path="/efe_task_it">
          <Navbar />
          <EFE_task_it />
        </Route>

        <Route path="/itw_it">
          <Navbar />
          <ITW_IT />
        </Route>

        <Route path="/itw_task_it">
          <Navbar />
          <ITW_task_it />
        </Route>

        <Route path="/nt_ece">
          <Navbar />
          <NT_ECE />
        </Route>

        <Route path="/nt_task_ece">
          <Navbar />
          <NT_TASK_ECE />
        </Route>

        <Route path="/ed_ece">
          <Navbar />
          <ED_ECE />
        </Route>

        <Route path="/ed_task_ece">
          <Navbar />
          <ED_TASK_ECE />
        </Route>

        <Route path="/ss_ece">
          <Navbar />
          <SS_ECE />
        </Route>

        <Route path="/ss_task_ece">
          <Navbar />
          <SS_TASK_ECE />
        </Route>

        <Route path="/dsd_ece">
          <Navbar />
          <DSD_ECE />
        </Route>

        <Route path="/dsd_task_ece">
          <Navbar />
          <DSD_TASK_ECE />
        </Route>

        <Route path="/dsa_ece">
          <Navbar />
          <DSA_ECE />
        </Route>

        <Route path="/dsa_task_ece">
          <Navbar />
          <DSA_TASK_ECE />
        </Route>

        <Route path="/math_ece">
          <Navbar />
          <MATH_ECE />
        </Route>

        <Route path="/math_task_ece">
          <Navbar />
          <MATH_TASK_ECE />
        </Route>

        <Route path="/es_ece">
          <Navbar />
          <ES_ECE />
        </Route>

        <Route path="/es_task_ece">
          <Navbar />
          <ES_TASK_ECE />
        </Route>

        <Route path="/ect_ee">
          <Navbar />
          <ECT_EE />
        </Route>

        <Route path="/ect_task_ee">
          <Navbar />
          <ECT_TASK_EE />
        </Route>

        <Route path="/math_ee">
          <Navbar />
          <MATH_EE />
        </Route>

        <Route path="/math_task_ee">
          <Navbar />
          <MATH_TASK_EE />
        </Route>

        <Route path="/eft_ee">
          <Navbar />
          <EFT_EE />
        </Route>

        <Route path="/eft_task_ee">
          <Navbar />
          <EFT_TASK_EE />
        </Route>

        <Route path="/ae_ee">
          <Navbar />
          <AE_EE />
        </Route>

        <Route path="/ae_task_ee">
          <Navbar />
          <AE_TASK_EE />
        </Route>

        <Route path="/em_ee">
          <Navbar />
          <EM_EE />
        </Route>

        <Route path="/em_task_ee">
          <Navbar />
          <EM_TASK_EE />
        </Route>

        <Route path="/bfe_ee">
          <Navbar />
          <BFE_EE />
        </Route>

        <Route path="/bfe_task_ee">
          <Navbar />
          <BFE_TASK_EE />
        </Route>

        <Route path="/ic_ee">
          <Navbar />
          <IC_EE />
        </Route>

        <Route path="/ic_task_ee">
          <Navbar />
          <IC_TASK_EE />
        </Route>

        <Route path="/nm_ee">
          <Navbar />
          <NM_EE />
        </Route>

        <Route path="/nm_task_ee">
          <Navbar />
          <NM_TASK_EE />
        </Route>
      </Switch>
    </>
  );
};

export default App;
