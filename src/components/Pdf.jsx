import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import logo from "../assets/nextjs.png";

const styles = StyleSheet.create({
  page: {
    background: "E4E4E4",
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  parragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

function Pdf() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello world</Text>
        <View style={styles.section}>
          <Image src={logo} />
          <Text style={styles.parragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            beatae cum enim, facilis praesentium soluta quia rerum commodi
            officiis maiores.
          </Text>
        </View>
        <Text style={styles.parragraph}>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos
          fuga culpa cumque labore sed quaerat ex placeat veniam minus vel
          reiciendis distinctio, illum molestias totam velit ullam alias
          corporis eligendi ipsam qui ipsum dignissimos. Modi assumenda magnam
          voluptatem necessitatibus aspernatur sunt autem, sequi suscipit
          asperiores, mollitia, quod dolorum maiores repellat est odio quam fuga
          omnis? Ipsam ea repellendus a sapiente, suscipit doloribus inventore
          iste animi omnis sint dolorem explicabo dignissimos odit voluptate
          libero facere minima quasi. Sapiente dignissimos officiis architecto,
          cupiditate eum nesciunt eaque quibusdam ratione odio beatae? Quae
          voluptas, cupiditate modi magni porro incidunt mollitia, possimus
          aspernatur illo exercitationem vel illum eligendi nesciunt aut
          pariatur molestiae natus! Dolore iure nobis magnam nam cupiditate nisi
          eum corporis ea iste deserunt eaque quis repellat, quam officiis
          cumque vero! Consequatur, quasi necessitatibus. Exercitationem ipsum
          laudantium molestias vel deserunt soluta ab accusamus corporis
          architecto rerum minus ex, aperiam non ipsam nulla ut provident
          debitis voluptatem eligendi quaerat fugit similique asperiores,
          excepturi cum! Ut minus odio est eius aliquid enim aut, reprehenderit
          mollitia dolore hic voluptatum sapiente, accusantium nisi fugiat nam
          exercitationem iure labore ipsa ipsum nostrum amet harum? Earum
          corrupti, ipsa mollitia impedit quae a ullam vitae fuga sequi,
          molestias inventore eligendi.
        </Text>
        <Text style={styles.parragraph}>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos
          fuga culpa cumque labore sed quaerat ex placeat veniam minus vel
          reiciendis distinctio, illum molestias totam velit ullam alias
          corporis eligendi ipsam qui ipsum dignissimos. Modi assumenda magnam
          voluptatem necessitatibus aspernatur sunt autem, sequi suscipit
          asperiores, mollitia, quod dolorum maiores repellat est odio quam fuga
          omnis? Ipsam ea repellendus a sapiente, suscipit doloribus inventore
          iste animi omnis sint dolorem explicabo dignissimos odit voluptate
          libero facere minima quasi. Sapiente dignissimos officiis architecto,
          cupiditate eum nesciunt eaque quibusdam ratione odio beatae? Quae
          voluptas, cupiditate modi magni porro incidunt mollitia, possimus
          aspernatur illo exercitationem vel illum eligendi nesciunt aut
          pariatur molestiae natus! Dolore iure nobis magnam nam cupiditate nisi
          eum corporis ea iste deserunt eaque quis repellat, quam officiis
          cumque vero! Consequatur, quasi necessitatibus. Exercitationem ipsum
          laudantium molestias vel deserunt soluta ab accusamus corporis
          architecto rerum minus ex, aperiam non ipsam nulla ut provident
          debitis voluptatem eligendi quaerat fugit similique asperiores,
          excepturi cum! Ut minus odio est eius aliquid enim aut, reprehenderit
          mollitia dolore hic voluptatum sapiente, accusantium nisi fugiat nam
          exercitationem iure labore ipsa ipsum nostrum amet harum? Earum
          corrupti, ipsa mollitia impedit quae a ullam vitae fuga sequi,
          molestias inventore eligendi.
        </Text>

        <View style={styles.pageNumber}>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}

export default Pdf;
