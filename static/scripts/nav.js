function scrollToNavItem() {
  var path = window.location.href.split('/').pop().replace(/\.html/, '');
  document.querySelectorAll('nav a').forEach(function (link) {
    var href = link.attributes.href.value.replace(/\.html/, '');
    if (path === href) {
      link.scrollIntoView({block: 'center'});
      return;
    }
  })
}

function getActiveNav(allNavs) {
  return Array.from(allNavs).find((navA) => {
    return navA.href === location.href;
  });
}

function activateSectionWithActiveLink() {
  const allNavs = document.querySelectorAll('nav a');
  if (!allNavs.length) {
    return;
  }
  const activeLink = getActiveNav(allNavs);
  const parentSection = activeLink.closest('details');
  if (!parentSection) {
    return;
  }
  parentSection.toggleAttribute('open', true);
  allNavs.forEach(function (link) {
    const li = link.closest('li');
    if (li) {
      li.classList.remove('active');
    }
  });
  const activeLinkLi = activeLink.closest('li');
  if (activeLinkLi) {
    activeLinkLi.classList.add('active');
  }
}
function delayNavActivation() {
  setTimeout(activateSectionWithActiveLink, 500)
}

scrollToNavItem();
activateSectionWithActiveLink();
