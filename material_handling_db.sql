--
-- PostgreSQL database dump
--

\restrict JVdCgmMMQa5KPtyKEeAXIYLecb3GuHjz7Uoce4kodg21lTfWszubCqFWk1z4l5h

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-03-30 03:24:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16385)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16461)
-- Name: material_request_details; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.material_request_details (
    id bigint NOT NULL,
    material_request_id bigint NOT NULL,
    material_name character varying(512) NOT NULL,
    description text,
    quantity double precision DEFAULT 0,
    unit character varying(255),
    type character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.material_request_details OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16460)
-- Name: material_request_details_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.material_request_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.material_request_details_id_seq OWNER TO postgres;

--
-- TOC entry 5013 (class 0 OID 0)
-- Dependencies: 225
-- Name: material_request_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.material_request_details_id_seq OWNED BY public.material_request_details.id;


--
-- TOC entry 224 (class 1259 OID 16430)
-- Name: material_requests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.material_requests (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    date timestamp with time zone NOT NULL,
    note text,
    status smallint DEFAULT 0,
    created_by bigint,
    created_at timestamp with time zone NOT NULL,
    updated_by bigint,
    updated_at timestamp with time zone NOT NULL,
    deleted_by bigint,
    deleted_at timestamp with time zone,
    requester_name character varying(255) DEFAULT '-'::character varying
);


ALTER TABLE public.material_requests OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16429)
-- Name: material_requests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.material_requests_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.material_requests_id_seq OWNER TO postgres;

--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 223
-- Name: material_requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.material_requests_id_seq OWNED BY public.material_requests.id;


--
-- TOC entry 222 (class 1259 OID 16410)
-- Name: notifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notifications (
    id uuid NOT NULL,
    type character varying(255) NOT NULL,
    notified_user_id bigint NOT NULL,
    data text NOT NULL,
    message text DEFAULT ''::text,
    read_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.notifications OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16392)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16391)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4832 (class 2604 OID 16464)
-- Name: material_request_details id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_request_details ALTER COLUMN id SET DEFAULT nextval('public.material_request_details_id_seq'::regclass);


--
-- TOC entry 4829 (class 2604 OID 16433)
-- Name: material_requests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests ALTER COLUMN id SET DEFAULT nextval('public.material_requests_id_seq'::regclass);


--
-- TOC entry 4827 (class 2604 OID 16395)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 5000 (class 0 OID 16385)
-- Dependencies: 219
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20221012053451-create-users-table.js
20240624023607-create-notifications-table.js
20260327151828-create-material_requests-table.js
20260327162005-create-material_request_details-table.js
20260329091550-alter-material_requests-table.js
20260329161545-alter-material_request_details-table.js
\.


--
-- TOC entry 5007 (class 0 OID 16461)
-- Dependencies: 226
-- Data for Name: material_request_details; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.material_request_details (id, material_request_id, material_name, description, quantity, unit, type, created_at, updated_at) FROM stdin;
1	1	Steel	-	3	tons	Shipping Material	2026-03-27 23:49:53.156+07	2026-03-27 23:51:19.756+07
3	6	LNG	-	100	tons	Basic Material	2026-03-28 00:01:31.35+07	2026-03-28 00:01:31.35+07
4	6	Steel	-	100	tons	Basic Material	2026-03-28 00:01:31.35+07	2026-03-28 00:01:31.35+07
5	7	LNG	-	100	tons	Basic Material	2026-03-29 03:32:03.953+07	2026-03-29 03:32:03.953+07
6	7	Steel	-	100	tons	Basic Material	2026-03-29 03:32:03.953+07	2026-03-29 03:32:03.953+07
7	8	LNG	-	100	tons	Basic Material	2026-03-29 03:32:05.839+07	2026-03-29 03:32:05.839+07
8	8	Steel	-	100	tons	Basic Material	2026-03-29 03:32:05.84+07	2026-03-29 03:32:05.84+07
9	9	LNG	-	100	tons	Basic Material	2026-03-29 03:32:06.853+07	2026-03-29 03:32:06.853+07
10	9	Steel	-	100	tons	Basic Material	2026-03-29 03:32:06.853+07	2026-03-29 03:32:06.853+07
12	10	Steel	-	100	tons	Basic Material	2026-03-29 03:32:07.606+07	2026-03-29 03:32:07.606+07
13	11	LNG	long description long description long description long description long description	100	tons	Basic Material	2026-03-29 03:32:08.593+07	2026-03-29 05:25:55.581+07
15	11	Stone	description 1	50	Tons	Material	2026-03-29 05:44:55.651+07	2026-03-29 05:44:55.651+07
16	11	Copper	-	1	KG	Basic	2026-03-29 05:52:34.369+07	2026-03-29 05:52:34.369+07
17	11	bronze	-	2	KG	Basic	2026-03-29 05:53:56.038+07	2026-03-29 05:53:56.038+07
18	11	Gold	-	1	kg	Basic	2026-03-29 05:54:43.214+07	2026-03-29 05:54:43.214+07
19	11	Silver	-	4	Gram	testing	2026-03-29 05:55:19.149+07	2026-03-29 05:55:19.149+07
20	12	Wood	-	1	Ton	Basic Material	2026-03-29 18:29:02.548+07	2026-03-29 18:29:02.548+07
21	12	Steel	High Quality type ABC	5	Ton	Metal Material	2026-03-29 18:29:02.549+07	2026-03-29 18:29:02.549+07
23	3	Detail 2	-	2	Ton	Basic	2026-03-29 23:17:28.573+07	2026-03-29 23:17:28.573+07
24	3	Detail 3	-	1.23	Ton	Basic	2026-03-29 23:31:27.737+07	2026-03-29 23:31:27.737+07
11	10	LNG 1	-	100	tons	Basic Material	2026-03-29 03:32:07.606+07	2026-03-30 01:43:28.273+07
\.


--
-- TOC entry 5005 (class 0 OID 16430)
-- Dependencies: 224
-- Data for Name: material_requests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.material_requests (id, title, date, note, status, created_by, created_at, updated_by, updated_at, deleted_by, deleted_at, requester_name) FROM stdin;
2	Material Request for construction tools	2026-01-20 07:00:00+07	We need the material soon, maximum 2 week	0	1	2026-03-27 23:14:19.114+07	\N	2026-03-29 16:46:42.309+07	\N	\N	Testing
3	Material Request for construction tools	2026-01-21 07:00:00+07	We need the material soon, maximum 2 week	0	1	2026-03-27 23:15:03.928+07	\N	2026-03-29 16:47:17.619+07	\N	\N	testing 1
1	Material Request for construction tools	2026-01-15 07:00:00+07	We need the material soon, maximum 2 week at 2026-02-01	0	1	2026-03-27 23:12:23.816+07	1	2026-03-29 16:52:28.288+07	\N	\N	testing 0
10	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	2	1	2026-03-29 03:32:07.604+07	\N	2026-03-29 18:34:19.047+07	\N	\N	dafii
12	Create Material Request By form	2026-03-29 07:00:00+07	Note	0	\N	2026-03-29 18:29:02.535+07	\N	2026-03-29 21:59:28.54+07	\N	2026-03-29 21:59:28.538+07	Dafi
7	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	0	1	2026-03-29 03:32:03.946+07	\N	2026-03-29 21:59:41.262+07	\N	2026-03-29 21:59:41.262+07	-
6	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	0	1	2026-03-28 00:01:31.343+07	\N	2026-03-29 21:59:45.027+07	\N	2026-03-29 21:59:45.027+07	-
8	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	0	1	2026-03-29 03:32:05.837+07	\N	2026-03-29 21:59:50.481+07	\N	2026-03-29 21:59:50.481+07	-
9	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	3	1	2026-03-29 03:32:06.849+07	\N	2026-03-29 21:59:57.494+07	\N	2026-03-29 21:59:57.494+07	-
5	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	0	1	2026-03-28 00:01:08.944+07	\N	2026-03-29 22:00:01.746+07	\N	2026-03-29 22:00:01.745+07	-
11	Material Request for construction tools	2026-03-22 07:00:00+07	We need the material soon, maximum 2 week	1	1	2026-03-29 03:32:08.59+07	1	2026-03-29 22:00:06.055+07	\N	2026-03-29 22:00:06.054+07	-
4	Material Request for construction tools	2026-01-22 07:00:00+07	We need the material soon, maximum 2 week	3	1	2026-03-27 23:15:35.169+07	\N	2026-03-29 22:21:06.374+07	\N	\N	testing 3
\.


--
-- TOC entry 5003 (class 0 OID 16410)
-- Dependencies: 222
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notifications (id, type, notified_user_id, data, message, read_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 5002 (class 0 OID 16392)
-- Dependencies: 221
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, username, email, password, created_at, updated_at, deleted_at) FROM stdin;
1	dafi	\N	dafi@gmail.com	$2b$10$Ze1lGGYd7..YGo9CJ61tP.eQSPBLqtq6au2OCN6K6LL7cTNbo/JWi	2026-03-27 22:59:56.813+07	2026-03-27 22:59:56.813+07	\N
\.


--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 225
-- Name: material_request_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.material_request_details_id_seq', 24, true);


--
-- TOC entry 5017 (class 0 OID 0)
-- Dependencies: 223
-- Name: material_requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.material_requests_id_seq', 12, true);


--
-- TOC entry 5018 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- TOC entry 4835 (class 2606 OID 16390)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 4847 (class 2606 OID 16474)
-- Name: material_request_details material_request_details_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_request_details
    ADD CONSTRAINT material_request_details_pkey PRIMARY KEY (id);


--
-- TOC entry 4845 (class 2606 OID 16444)
-- Name: material_requests material_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT material_requests_pkey PRIMARY KEY (id);


--
-- TOC entry 4843 (class 2606 OID 16423)
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- TOC entry 4837 (class 2606 OID 16409)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4839 (class 2606 OID 16405)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4841 (class 2606 OID 16407)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 4852 (class 2606 OID 16475)
-- Name: material_request_details material_request_details_material_request_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_request_details
    ADD CONSTRAINT material_request_details_material_request_id_fkey FOREIGN KEY (material_request_id) REFERENCES public.material_requests(id);


--
-- TOC entry 4849 (class 2606 OID 16481)
-- Name: material_requests material_requests_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT material_requests_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- TOC entry 4850 (class 2606 OID 16455)
-- Name: material_requests material_requests_deleted_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT material_requests_deleted_by_fkey FOREIGN KEY (deleted_by) REFERENCES public.users(id);


--
-- TOC entry 4851 (class 2606 OID 16450)
-- Name: material_requests material_requests_updated_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.material_requests
    ADD CONSTRAINT material_requests_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id);


--
-- TOC entry 4848 (class 2606 OID 16424)
-- Name: notifications notifications_notified_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_notified_user_id_fkey FOREIGN KEY (notified_user_id) REFERENCES public.users(id);


-- Completed on 2026-03-30 03:24:34

--
-- PostgreSQL database dump complete
--

\unrestrict JVdCgmMMQa5KPtyKEeAXIYLecb3GuHjz7Uoce4kodg21lTfWszubCqFWk1z4l5h

