export const Style = `
header {
  font-family: "Yu Gothic";
  
}

.divider-custom {
  margin: 1.25rem 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.divider-custom .divider-custom-line, .divider-custom .divider-custom-line_h  {
  width: 100%;
  max-width: 7rem;
  height: 0.25rem;
  border-radius: 1rem;
}
.divider-custom .divider-custom-line:first-child {
  margin-right: 1rem;
}
.divider-custom .divider-custom-line:last-child {
  margin-left: 1rem;
}
.divider-custom .divider-custom-icon {
  font-size: 2rem;
}


.header_home {
  background: #dc2424; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #dc2424, #4a569d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #dc2424, #4a569d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: whitesmoke;
  width: 100%;
 
  clip-path: ellipse(65% 67% at 48% 32%);
}
`