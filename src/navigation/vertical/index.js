// ** Icon imports
import Table from "mdi-material-ui/Table";
import ChartDonut from "mdi-material-ui/ChartDonut";
import FormSelect from "mdi-material-ui/FormSelect";
import CubeOutline from "mdi-material-ui/CubeOutline";
import LockOutline from "mdi-material-ui/LockOutline";
import HomeOutline from "mdi-material-ui/HomeOutline";
import EmailOutline from "mdi-material-ui/EmailOutline";
import ShieldOutline from "mdi-material-ui/ShieldOutline";
import AccountOutline from "mdi-material-ui/AccountOutline";
import AccountGroup from "mdi-material-ui/AccountGroup";
import ArchiveOutline from "mdi-material-ui/ArchiveOutline";
import DotsHorizontal from "mdi-material-ui/DotsHorizontal";
import MessageOutline from "mdi-material-ui/MessageOutline";
import FormatLetterCase from "mdi-material-ui/FormatLetterCase";
import CreditCardOutline from "mdi-material-ui/CreditCardOutline";
import VectorArrangeBelow from "mdi-material-ui/VectorArrangeBelow";
import FileDocumentOutline from "mdi-material-ui/FileDocumentOutline";
import CalendarBlankOutline from "mdi-material-ui/CalendarBlankOutline";
import PackageVariantClosed from "mdi-material-ui/PackageVariantClosed";
import GoogleCirclesExtended from "mdi-material-ui/GoogleCirclesExtended";
import CheckboxMarkedCircleOutline from "mdi-material-ui/CheckboxMarkedCircleOutline";
import {
  AccountCash,
  ChatQuestionOutline,
  FileTableBoxMultipleOutline,
  SwapHorizontal,
} from "mdi-material-ui";

const navigation = () => {
	return [
    {
      sectionTitle: "Panel Faktora",
    },

    {
      title: "Kokpit",
      icon: HomeOutline,
      path: "/dashboards/crm/list",
    },

    {
      title: "Wnioski",
      icon: ArchiveOutline,
      path: "/apps/invoice/list",
    },

    {
      title: "Transakcje",
      icon: SwapHorizontal,
      path: "/pages/transactions/list",
    },

    {
      sectionTitle: "Panel Użytkownika",
    },

    {
      title: "Wiadomości",
      icon: EmailOutline,
      path: "/apps/email",
    },

    {
      title: "Konto Użytkownika",
      icon: AccountOutline,
      path: "/pages/account-settings",
    },

    {
      sectionTitle: "Panel Administratora",
    },
    {
      title: "Użytkownicy",
      icon: AccountGroup,
      path: "/apps/roles",
    },
  ];
};

export default navigation;
