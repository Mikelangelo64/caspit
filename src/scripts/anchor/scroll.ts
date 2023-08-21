import Popup from '../popup/popupClass';

const closePopupsHandler = (popups: Popup[]) => {
  if (popups.length === 0) {
    return;
  }

  popups.forEach(({ timeline, openButtons }) => {
    if (timeline && timeline.progress > 0) {
      timeline.reverse();

      openButtons.forEach((openBtn) => {
        openBtn.classList.remove('_opened');
      });
    }
  });
};

const scrollHandler = (
  link: HTMLElement,
  headerHeight: number,
  popups: Popup[]
) => {
  const sectionName = link.dataset.goto;
  if (!sectionName) {
    return;
  }

  const section = document.querySelector(
    `${sectionName}`
  ) as HTMLElement | null;
  if (!section) {
    return;
  }

  link.addEventListener('click', (evt) => {
    evt.preventDefault();

    closePopupsHandler(popups);

    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  });
};

export default scrollHandler;
