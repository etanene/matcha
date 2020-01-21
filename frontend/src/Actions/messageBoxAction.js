const MESSAGEBOX_CLOSE = 'MESSAGEBOX_CLOSE';
function close() {
  return { type: MESSAGEBOX_CLOSE };
}

const MESSAGEBOX_OPEN = 'MESSAGEBOX_OPENs';
function open(message, error) {
  return { type: MESSAGEBOX_OPEN, payload: { message, error } };
}

export default {
  close,
  open,
  MESSAGEBOX_CLOSE,
  MESSAGEBOX_OPEN,
};
