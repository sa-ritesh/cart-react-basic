import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Watch",
          price: 999,
          qty: 10,
          id: 1,
          src: "https://media.gq-magazine.co.uk/photos/5fca181eea319833403830dc/master/w_2121,h_1414,c_limit/04112020_Watches_14.jpg",
        },
        {
          title: "Laptop",
          price: 38450,
          qty: 4,
          id: 2,
          src: "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SS450_.jpg",
        },
        {
          title: "Mobile Phone",
          price: 5300,
          qty: 1,
          id: 3,
          src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVERIUERUSGBQSGBISGBESGBgSEhIZGhgcGhkZGBgcIS4lHB4rHxkaJjgmLDA0NTVDGiQ7QDs0QC40NTEBDAwMEA8QHxISHjQrIys0NTQ2ODY0NDQ0NDc0ND80NDQ0NDQ0MTQ0NjQ4NDQ2PzQ0NDE0Nj0xNDY0NDQ2NjQ0NP/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECBQYHAwj/xABFEAACAQIEAQkEBwYDCAMAAAABAgADEQQSITFBBQYiMlFhcYGRBxNSoUJykrGy0fAUFSNigqJTwdIkRGNzwsPh8TM0Q//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgIDAAEFAQAAAAAAAAABAhEDMQQSIUEFEzJhgXH/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERASFiMfTU5SSzb5FGYjsvwHmRHKVcpTJTrMVReNixte3Gwubd0wXKuPo4Si71GypTGZnPSZmJtf+Z2bTzHbJkGW/evZSq+tL/XH71P+DU+1S/1zmuC9p+EeqqMlamrEKKtQrlF9i+U9Ad+tuNhrN+ovmFwW7LXNweIk6iUp+VWt0aLk9jPTUeoY/dIVTG4ht1cD4UNNB6lix8QRJKueJ028JVjJ1EWbQkrVBqBWB7feK/ydyJNo8p1MvTpMWHFWp2I7bF9D6/5S0mUJj1iJjIkfvb/hVPtUv9cfvYcaVT1pn/rkUmUJj1izK4bGI9wp6Q3RgVdfFTrbv2kqa7UDEXXSol2Ru8bqe1TsRM3ha4emjrs6qwB3Fxex75WzSHvERICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJ5V6gVGY7IGY+AFzA8MVjVTQ3ZiLhF1YjtN9FHeSBIFXHVTxSmO7pN9phYeGU+MjuclNqlQgMQajudlsLk+CjQdlh3zl2L9q7e8PuMOppA2DOxFVx29Uhb9msjtj7ZZfxdLIvVpElic5OZyWPUYWGbbt0sNJhPaLyPUxWCqJR1dHSqqXtnyjVb+DEjvAkrkPlhMUMNWS+VyWAIsw6LqwI7QykeXfJvLvK9LC0qtesTlXLoozMxIUBVHEkkDz10vLzppx719cDw3N/GVmWkuHqob2Z6tNqaoDuXYjh2bnYA7TvuAwn8Ao+azgqTfK1jpqRsbTQcF7T6L1gr4f3aE2FUutTLc7soUZR2kFrdhnScLXDAEcOHYRoRJvS8UVAqZVvZVtqbnQcTJFQ6meNUG1RjxB08BPSqdTEFpMpeUJiSF4MSl4F9I9Ief3GTeRB/s6a3tnH9xkCkekPP7pN5AP+zJftqfjaVy6GTiIlUEREBERAREQEREBERAREQEREBERAREQERECkx/KVZcj092dWW22UEEXY8B9/C8uxeKIOVOtpdtwl9tOLHs4bngDBW2uum5Ym5Y8Tfie/yE5OfyZh8na+OG/teNamtfD5X6tVGpuOIDrlYeOoE4hivZ9ylTqNRRFdCbCsGVFK36xUtmBHYAe687dgiAaiX0v7xTvod/nc+Ymv8AP/nI+DwoakqmrVYU1Li6roSzEcbBSLdpHhN+PP2xln5c33HK4reaXIxwi4aiTcpfMdgWOdmIB2F2sO4C9jeX8/ORHxeFenTt7xXSsgY5VdkBBQk7XW9r8fA21n2b8rYvEYxv2qoWCqGW6ImpuDYqoNrEabTplVAb3m8mpqtMZZPrgGH5q46tUFE4epTFwGqVEyIgtYkN9PTgtyZ3Xk6hkphdfPe2wv32lTRAOhb7R/OXhO8+pk36tJp61BcEfECPzPlLXa5Jlo0/VzKEwlW8unnKgwKmCZQmUMC6iekP1wk/kHL+zJlta9Qadudr/O8x9HrD9cJpuO54VKDPQWoqhCbBKRaqC3SN2Y5Tq3ZK53Ua8PBlzX1x7dTlZw/Gc86zixqYpr8RUGH+VMWmMfnBVJuFQH4mLs/2swmPv/Tvx/SeW92PoOJybmlz3qrUWnXYmkdCajFjTHxh21IG7BidNQRax6wJaZSuHyPHz4MvXJdERLMCIiAiIgIiICIiAiIgIiICIiAiIgYJOkobjU6ZP1tSPSy+Qnz9y5zkxlfE1XNeqgRmVKSO1NUCkgAKumaw1J39BPoGm4JZRtmZkbgy5tbeDaDuy9s07lr2a4PE13rZqtJnJZ0pFVVmO7WZTYk329L3nn8WWPFyZe87bWW4zSD7OOW6tailSqSzU3eg7n6a2Qhm/m6QBPHLc6kzY+dvIVPF0TRqFlswqJUUZmpuAQGy/SBBsV7/ADGvcvct4LkmkuDoU2d8hbIpChQSek7tfUm/AnTgLTcMDilr4alVFiGRGuP5lDA+YN50cNtlsmpv45uaasv5afzG5stg8WzNVRzUsoCKVtbMbm53m/NMVRW2IpW+JvwNMqZ143c+pwu8dvJolTKEyV1CZbBMoTAQJSBAulIlYF1DrCcY5xKRi69/jJ8iAR8jOz0esJxTnZXQY6vdX3QZgxGyKOqdOEpnN4uzwvJx4M7llNzWkGJ4rWT42H10B/BPRWB2emfElD6EGYete1h+p+Pl3df9j3wtTK6Mdgwv3jYj0vO/82a5fB0GJuwT3bHtZCUY+qmfPhR/hbW+q2YfI3nZPZxyolTDtSzr7xGLe7Jy1Mrqrlsp1tnZxe1tDJwllcf6nycXLx45YWWyt2iImrxCIiAiIgIiICIiAiIgIiICIiAkHG1DpTU9Kpe5G6oOsfHWw8e6Tpj8P0nqvxzGmO4Jp9+Y+ciizEYdMgFwoW2U6DKRsR4besj03zX2zpvbZhwYdxt8u0TjHPnnfjnx+Io0q70adBzSVabGkzFTYszjpG52F7WA03J2P2Ycu18UtRKjXq4cplqkWzq4Y2cDvQgnjcHcXnPz8PtjtfHLV0x/tF5rYl8W2Lw1Nqq1ERXRAHem6jL1D1lIsdL8eE2T2criUwvucVTZGzPkV7BivWHRB6JuWFjwUTbbh1LLoy3Vl4qeIuOHh4zGYpShFQalSCb6krfUel/Wc+PlZYWceU+J5OKZY2ztcn/2KX1m/A0yZkCoB+00SNmYsD23R5Oaenh0w4v4rDLGMqxljGWaKXlCZQmXLTYi9jb4rG3rAtvLhPXE0gLZFbKBq5BGY/lPIQKystErAvo9YTm3OLmHXq58XhSHNRqjPRNg4Icr0Dx6uxnSaPWEpyLWIpqp4tVynt6b3Hj+u2Z8mUxkTJt87V6ToxV1ZWXQowKsPEGec+jOXebWExiWroM30aqdGovmJybnN7PcXhrvSvWojXMg/iKP5l4+I9JEqtjTVNjcXB7RoZNwfKVRHRszXQ5lYEipTPxI+4P/AJHGQf8ALS3ZElD6N5kcunGYNajkGoje7qFdAzBQytbhmRka3AkjhNjnO/Y5TIwdVjexemB3/wAGmxP94HlOiQkiIgIiICIiAiIgIiICIiAiIgJjgwSoytotU5kbhmt0lv26Fh23PZMhNG9rGOangaaoWDVKyAFTlIyI9QG4/mRR5yLBE52+zWhjMQcQlR6NSpb3hXVHsLXK8GtbW9tBpxnunIVPkfkzFPhgXqLTqVGd+kXYKbZrW6IsBYWsL8SSdb5te0erTVUxa+8Tb3q//IBtqNm2PZOk4DlDDYukxpMlRHBVkOuhFirKdvAwlxbmbz2r0MQzYyqXp1yMzObtTN7BgLWCa6qNtxsQ3YK6q6BkIKsOGs1V/ZNgfeZg2I93e/7PnGT6ua2fL/Vfvm1DDDDqoRf4ahU92gACqAAMo7gNh2aDa3J5XFjlPbGNOPKz5UDBnpUFO9Oo9P8Ap925X5aeRmSYyA9HLiaDoQUqEm42NkfL8mPrJrGdXj5W8c32zs1bFrGWNKtLTNgQC4B2JF/WZrNMGRJyYwZele/dx75FhXvjXOQ242B8JjZLqYoZeje5014SHGKIrEpeLyyXpR6wkTkd7oyPtnqEEbi7tZh5g+klUT0hMfhG6COPovVpt4GoxU+un9U5fLxt49zufUzL1ym/yztCqQcj9Ya34MO0frT0ktWmPUZlAvZhqrdh/Ke+HrXuG0ZdCOzvHcZz8HPMovljpgOcvMXB4y7BfdVj/wDqgtf6y7Gck5y8zMZg+umemSVWtT6S92Ybrvx0759CKZV0VlKsAynQqdQZ1ys7GB9nmFycnUtum1WppxUuwT+wLNomOwCCkRQUAIFvTA0yqLAp4C4t3HumRlkEREBERAREQEREBERAREQEREBOTe2fEnPhKYOipUcjtLugU+QR/WdZnLfbFyY7HDYhR0bNQdvhYkNTv2A3qLftKjjA5LicUy5FUakA2Pfr95npyLyxWpVQ9N2RxYhkJFwTxHEajQ6TzxWGZrWuHTTbh3j9flTBYOzZmYE91rfLykjr3Nn2lo7rQxuVXOi1V0VztqDse4b8J0BHR1uhDA8RPl7F0bMTbMrDszWPeBrM9zZ51YvCG6OWpggCk5Og+FTrlG2huBY6aytxmkyu24igy1aIHUaoWt8Le7fbuNyf/cvYzA8i88KOOqUEUMtVHNRlIt0Qjqe0bsvHj5DOMZbjxmM1E27WEykGJogiIgIiICIiBfR6wmP5LGZKiH6bVQD2EOxBk+iemvjMZyc1rkcHqH+9pnn0y5eoymCq3UX32I7CNCPWTKiFrFesu3Yw+EyAOjVNuq4FQeejD1sf6pkEM8LLfDyWO3G++Er2w9YMO/Yg7g9hkgGQaim+dNx1h8Q7u8fru91rrkLk6AE38J6fFyTKMcppdvWQD6Cux87KPXX0k+Q8DSIBdhZnsSPhH0V8h8yZMnRFCIiSEREBERAREQEREBERAREQEj4vC06tNqdVVdHBVkYXVgeBEkRA4lz65rpg3Q0Wz03UstOsM7JZ1Uham9hnXe513mp+5OW7Uzrr0HzfJ9J2D2nYa+HpuBcqaieAKF/xU0HnOScpYg06BZbEhgovqAWJIJHGwH3TO2zLT1ODxuHPx/3Mt7m96RWRDuXHcyFgPNCBLP2fMei9NjsFDa+h29ZEw/KNUOnvGzqxAINri9urpoRfw0tMjy5TZURlJAzlWZdLGwy3PZfN8pbdl1XN+xx58V5MLfn4sbL7OMO68ooWFhkqC9wRw7J1BjOR+y+qTyoigkj3VQ2IUG9116IHAzrTTaTTkihMpeUJlLyVl14vLbxeEK3i8peLyUq3i8peUvA9aB6a+MxuB2P16n42mQw56a+Mx+B2P16n42lM+mPN0yFbqK/Gm1z9Vt/z8pOoNcSNh7HonZgVPnGAYi6HdCVPlsfMWPnPJ83DrL/Gvi5d4sipnkaQ96nwM1yvDOASvgDa/iF756iW7tTUblw3gF6RP3D+oTLx8rM5I3znxloiJ7DnIiICIiAiIgIiICIiAiIgIiICIiBiOcnJ5r4WpTUAv0XQE2BZSGCk8AbWPcTOI4nAjJUp1FbKTbXQgqba/C4IsQdiOzf6DImD5V5s0K7F+mlQ71KRCsfEEFSbAC5F++Uyxt+x3eH5c4pcM5vGuEYPkOmjhgxcg3Cl1OU8DYdYj9CZtcExBGVrEWsVKgjvzgKROmLzKTY4nElfhBprcd5yfdaTaHNHBLqUdz/xKjuD/Tmy/KVuOV7dmPm+PxY3HDG/Wg8zcAKWMp2VVuH0XIpPRO6rofG83UmSsZybQothvc0qSXq2Pu0VLj3VTew1kRp0YTWLzOflx5c9yaihMpeUMpLslbxeWxAuvKXlIgVvF5SIHphz018ZCwOx+vU/G0m4frr4yJgho316n42lOTpjzdMgkuqaVFbhUFj9ZfzF/syiCXYkXpi1rq9Mi+o1YKfl985eXD3xuLLiy9cpUxqlrAAszbINz2+A7zoJLweHK3ZyC7aG3VUfCvd38fQC7C4VUvxY2u53PYO4DgBpJUrw8Ew+3t2ZZbViInSoREQEREBERAREQEREBERAREQEREBERAREQMVyz1sN/wA3/tVBMQ25mX5b/wB3PBaov503UfMiYhtCfOaY9JiwykqZSWSREQEREBERA9KHXXxkbBDRvr1PxtJOGHTXzPyMpyZharIGVTZizh3IRSGYkWtdm0I4Ad8pn0y5ZbPiSgnphkNR1VeojK7twupuqA/FexPYBruJKo8kf4js38qfw1PjYlj5tbumRpU1VQFAUDQBQAB4ATKRnhx2XdesREs3IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBGxuHFSmyNcZrWI3Ug3Vh3ggHymuYq6m1YBH2zHSm/ernTX4TrNslpUHfY8JMuhqQHZ8iD90ZDNkPJ1A70qX2F/KU/d9D/BpfYX8pb2TtruQ9hjIeyZHHch0y2amlIE6GmyjI1he4IF0PeAfDjMP+z075fdpfbYW9bf5SP3P6Uyz1+HvkPYYyHsMmYfkBd3FMcbIodvtMLf2+cyNHkfDptSpkndmUMx8zJ9kzLf4YLIewy1hbU2A7WIUfMzZf3dQ/wAKl9hfyly4CiDcU6YPaEUH7o91ttfwlBqvRS+VtHrDqqvEIfpMe0aD5HZUQKAqiwUAADYAaAS+VlbdoIiJAREQEREBERAREQEREBERA//Z",
        },
      ],
    };
  }
  increaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  decreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty >= 1) {
      products[index].qty -= 1;
    }
    if (products[index].qty === 0) {
      this.deleteProduct(products[index].id);
      return;
    }
    this.setState({
      products,
    });
  };
  getCount = () => {
    const { products } = this.state;
    var count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  deleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getAmount() {
    const { products } = this.state;
    var amount = 0;
    products.forEach((product) => {
      amount += product.qty * product.price;
    });
    return amount;
  }
  render() {
    return (
      <React.Fragment>
        <Navbar count={this.getCount()} />
        <Cart
          increase={this.increaseQuantity}
          decrease={this.decreaseQuantity}
          deletee={this.deleteProduct}
          products={this.state.products}
          amount={this.getAmount()}
        />
      </React.Fragment>
    );
  }
}

export default App;
