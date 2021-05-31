import "./style.css";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../../actionTypes/cartActionTypes";

const ItemCardComponent = (props) => {
  const {
    id,
    title,
    price,
    img,
    amount,
    removeItem,
    addToCart,
    removeFromCart,
  } = props;

  return (
    <div className="item-card-container">
      <input
        type="image"
        src="https://img.icons8.com/fluent/48/000000/close-window.png"
        alt="close-btn"
        width="30px"
        height="30px"
        onClick={removeItem}
      />
      <div className="item-container">
        <img src={img} alt={title} height="100px" />
        <div className="item-name-price-container">
          <h2 id={`item-text-${id}`} className="item-name-text">
            {title}
          </h2>
          <h3 id={`item-price-${id}`} className="item-price-text">
            Price: ₹{price}.00
          </h3>
        </div>
      </div>
      <div className="item-counter-container">
        <input
          type="image"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADj0lEQVRoge2ZS0hUURjH/9+dR5FmaLUILQgiB0wtZ6xoV7SpNrUYiixoEUKMkroPJoh2OYSOpEErg16LgmoVLqPk3tKJQIU2ZbXoQZEazutr4Szq3jNzz5l75ybob/k9zv1/c+eex3eAVVZZ2ZAbg0TvRX1TO+r3EtNB5BFmQoiALQCqCyFzAD6BMQ0NBkBjqbaacVA87/TZjgrYNd631adxjIEzAOoV02cZGKVsNpnaPzBbroayCtjzqntzPue/woRzAILlPrxAGsCtALRLRuTaV9Vk5QKa9d7TBAwAqFPNteEbGF2p9sQdlSTpAsJ6ZyCD6iGAz6trk4eJh4O80G1ERjIy8VIFhPXOdRmqegDGEWfypHkawHzUiIws2AXaFhDWOwMZqnrkofglCM9yazcce9sUT5cK0+zGyaB6yHPxAMA47Pv987pdWMk30Gz0dBDTqHuq1CGiU5Ph/rtF/cUcoZexjUFfcArApoook+d7AFpjsSnWXyxrjRa8yg7EpyKJf36cFr2XyxyqLoP8ZQAxkVP4DbS86G4oLFLLhfNN+sVtIoewAPL7u+B8hXWToAbtgshhLYDjGgMdFZekCAFno/eiPrPdUkDz6x/7ADR4okqN+pntDWGz0VIAMR30Rk8ZEA6ZTZYCmBHxRo06DEi8AWCnN3LKotFsEK0DW2RGMs/zTuMl1wmLNtE0Wi2wLRfWmw22m7nljqiAOc9VyPPLbBB9A58hcVy0+8+6uBf6m89mg3UaBWZceFClmDYbrNMoQfdGizoMsmgTfAM05oWYcvDlcxZtlgJSbTXjAD54okiN9xPttYbZaH0DFM8zcNsTSUrwbVErUnweyGaTWOqYLRcWyU9JkUNYQKFXeauikhQgws3J3YmPQl+xpKbnvXW+IKbx/w/13wLQQsUO9UW3Em8PJL6D0V05XXIw6EKppm/JvVCqPXGHiYfdlyUHMSXfRPrvl4qx3cyF3n2MEeihe7LkYOBJ7VxNj12cfHMXVfcBHHWsTI7HAcyflGnuSm2njcjIQgDzxwHccCzNBmJK1v3acEJGPFDGBUer0XeSmQfh/uz0hUExu/+8GeUDzWS4/246lw4BGAKwqJovYJEIg7k0QqriAYeXfK0TvfX5LLpoqRG2VTH9A8Cj5KdksUVKBleuWcFxrVX/GQHhUKH10YilW8u/r1lnAcwwSPflc2MT7bWGG9esq6yy0vkDOQcIQHC/wKAAAAAASUVORK5CYII="
          alt="plus-btn"
          width="34px"
          height="34px"
          onClick={addToCart}
        />
        <h3>{amount}</h3>
        <input
          type="image"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADHUlEQVRYhd2XXYhMURzAf/+7o5UYUhqD9g0vwlJ4mPGAFc1s8iCxjzxIyRP5Kop98CJvKK+rpNDYWXbtg5jdUiTyYouQzFC+dh/YdM/fw9677sydvTO7Zu5sfk/n43/P+d1zOl8wzZF/beDrli1zR2eOLgdaEGYDKIwI9vvmn7OG5vf3/whd8GN7co2odiC0oawIaEcRXmKk1zTJtcWZh8/qKlhoT+5Q1RPAusl25PT2WJTOhd25O9V/UgWf0xuX2tiXQTZNSczXqfSJbR+M3R18XTm2AoX2xB5VrgBzaiHnYRhlfzybuxEUZAVVFtKJw6p0UXs5gCjC9Xw6cSYoaELBQip5QuEiNVjpAQhwOp9OHg0K8OFMa9dE9XVAUXaXm26fwNiCME+pz7QGMWwprbFs7o230DfFNuYS4csBRG24XFpYJFhoT+4ANoemVIIIbflUMuUtKxJ0NuHGInqqKOsmPqYSa0V4Er6RHwtWx7pzz530GCLsbZxSMQbtcNPeKd7aAJeyCNL2N417Zfr1jfD2vUqYiKXzFmQGRiwA5z43XeQArN+2LANnilXNksb6lEFoAYiMpStvzKJ0GrhVi74t2KnCyeD+NOrETm8i4L4hglHhpBD819Wi1cSIDIMzgiLWh1p0XFOU9+AINv9qfkV1PxYWZkaTDoEjOL+//wfCy8Y6edHnCzIDI1C8SPoaZFMGue+mxgWNWF2NkfFjWTLuMi64OPPwGcLjxij9RWEwlnn0ws0X7YMC58JXKsFw1pv1bX/5dKIH2B6aUDG98e7cNm+B7ySxbHMIGA5NyUHgO5HIAZ9PaUHs7uBrlP2Euy+qUd0Xv/3gbWlF2bN47H0qx+rv5aAcWZQduFmuKvAILqQThxUuUL9LhaIcj2dz5ycKqHhJzacSuxCuAtFamgl8N6r7Jho5l4ojE8/mblhKK9BbMzukRyOR1kpyMMlrfj6VTDnv1g1T0VIYxHB2UU/uXrXfTOkd8imdWGXQDkW2CqwMaMcIvFDosyzp8p4QdRX08mX7+uioRJYhtLhPB4URkHczmnTIvZX8t/wBAp/6nMrJ670AAAAASUVORK5CYII="
          alt="minus-btn"
          width="30px"
          height="30px"
          onClick={() => {
            if (amount === 1) {
              removeItem();
            } else {
              removeFromCart();
            }
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    addToCart: () => dispatch({ type: INCREASE, payload: { id: id } }),
    removeFromCart: () =>
      dispatch({ type: DECREASE, payload: { id: id, amount: amount } }),
    removeItem: () => dispatch({ type: REMOVE, payload: { id: id } }),
  };
};

export default connect(null, mapDispatchToProps)(ItemCardComponent);
