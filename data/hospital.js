/* Hospital and program details for THIS deployment. Mag-istorya Kita is written for a psychiatrist seeing
   patients in Kalibo, Aklan; no hospital is named yet, so the fields below are empty and nothing hospital-specific
   is hard-coded elsewhere. The About page reads the crisis line from here; future handouts and ward tools will
   read the rest. Edit this file for your own site; leave a field empty to hide it.
   (Usap Tayo keeps the shared Mariveles version of this file; this copy is deliberately generic.) */
window.HOSPITAL = {
  name: '',                       // e.g. 'Dr. Rafael S. Tumbokon Memorial Hospital'; empty = not shown
  shortName: '',
  address: '',
  program: '',                    // residency or service name, shown on handouts when set
  country: 'PH',
  // Forms the ward tools follow. None yet; put your own form numbers here when they exist.
  forms: { deesc: '', discharge: '', admission: '' },
  formPrefix: '',
  posts: [],                      // wards or posts, { code, name }, used by the duty and case tools when present
  yearLevels: [1, 2, 3],
  // Crisis line shown on About (and in future handouts). Numbers per the January 2026 NCMH report; verify locally.
  crisis: { name: 'NCMH Crisis Hotline', number: '1553', note: '24/7, toll-free from landlines and mobiles. Also 0919-057-1553 and 0917-899-8727.' }
};
