import Pdf from "./components/pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const App = () => {
  return (
    <>
      <PDFViewer>
        <Pdf />
      </PDFViewer>
      <PDFDownloadLink document={<Pdf />} fileName="myFirstPdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (
            <button>Document now!</button>
          )
        }
      </PDFDownloadLink>
    </>
  );
};

export default App;
