import s from './style.module.css';
//import urlBg from './assets/bg1.jpg';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  const styleSection = colorBg
    ? { backgroundColor: colorBg }
    : { backgroundImage: `url(${urlBg})` };
  return (
    <section className={s.root} id={id} style={styleSection}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
