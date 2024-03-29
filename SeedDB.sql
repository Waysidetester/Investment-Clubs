USE [master]
GO
/****** Object:  Database [InvestmentClubs]    Script Date: 7/16/2019 8:15:35 PM ******/
CREATE DATABASE [InvestmentClubs]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'InvestmentClubs', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\InvestmentClubs.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'InvestmentClubs_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\InvestmentClubs_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 COLLATE SQL_Latin1_General_CP1_CI_AS
GO
ALTER DATABASE [InvestmentClubs] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [InvestmentClubs].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [InvestmentClubs] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [InvestmentClubs] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [InvestmentClubs] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [InvestmentClubs] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [InvestmentClubs] SET ARITHABORT OFF 
GO
ALTER DATABASE [InvestmentClubs] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [InvestmentClubs] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [InvestmentClubs] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [InvestmentClubs] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [InvestmentClubs] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [InvestmentClubs] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [InvestmentClubs] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [InvestmentClubs] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [InvestmentClubs] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [InvestmentClubs] SET  DISABLE_BROKER 
GO
ALTER DATABASE [InvestmentClubs] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [InvestmentClubs] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [InvestmentClubs] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [InvestmentClubs] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [InvestmentClubs] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [InvestmentClubs] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [InvestmentClubs] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [InvestmentClubs] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [InvestmentClubs] SET  MULTI_USER 
GO
ALTER DATABASE [InvestmentClubs] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [InvestmentClubs] SET DB_CHAINING OFF 
GO
ALTER DATABASE [InvestmentClubs] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [InvestmentClubs] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [InvestmentClubs] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [InvestmentClubs] SET QUERY_STORE = OFF
GO
USE [InvestmentClubs]
GO
/****** Object:  Table [dbo].[Club]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Club](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ClubName] [nvarchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[PartnerCount] [int] NOT NULL,
	[AccreditedPartnerCount] [int] NOT NULL,
	[DollarsInvested] [decimal](19, 4) NOT NULL,
	[ClubInvestable] [decimal](19, 4) NOT NULL,
	[SelfDirected] [bit] NOT NULL,
 CONSTRAINT [PK__Club__3214EC077CF7C8F0] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Distributions]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Distributions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[InvestmentId] [int] NOT NULL,
	[DistributedDate] [datetime] NOT NULL,
	[DistributedPerUnit] [decimal](19, 4) NOT NULL,
 CONSTRAINT [PK__Distribu__3214EC073287A622] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Investment]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Investment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AssetType] [int] NOT NULL,
	[ClubId] [int] NOT NULL,
	[OwnershipUnits] [bigint] NOT NULL,
	[DollarsInvested] [decimal](19, 4) NOT NULL,
	[DollarsDivested] [decimal](19, 4) NULL,
	[ReceivingEntity] [nvarchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[DebtCoupon] [decimal](5, 4) NULL,
	[MatureDate] [datetime] NULL,
	[ContractPrice] [decimal](18, 2) NULL,
	[PercentEquity] [decimal](5, 4) NULL,
	[InvestDate] [datetime] NULL,
	[DivestDate] [datetime] NULL,
	[Pending] [bit] NOT NULL,
	[Invested] [bit] NOT NULL,
	[Convertable] [bit] NOT NULL,
 CONSTRAINT [PK__Investme__3214EC07761EA846] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvestmentType]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvestmentType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[InvestmentType] [nvarchar](255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK__Investme__3214EC07D29078D6] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Partner]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Partner](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Accredited] [bit] NOT NULL,
	[FirstName] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	[LastName] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
 CONSTRAINT [PK__Partner__3214EC077910BFD2] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PartnerClub]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartnerClub](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PartnerId] [int] NOT NULL,
	[ClubId] [int] NOT NULL,
	[ApprovedMember] [bit] NOT NULL,
	[IsAdmin] [bit] NOT NULL,
	[DateJoined] [datetime] NULL,
	[Contributing] [decimal](18, 2) NOT NULL,
	[Investable] [decimal](18, 2) NOT NULL,
	[ClubExitDate] [datetime] NULL,
 CONSTRAINT [PK__PartnerC__3214EC07951F3E7D] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PartnerClubInvestment]    Script Date: 7/16/2019 8:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartnerClubInvestment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PartnerClubId] [int] NOT NULL,
	[InvestmentId] [int] NOT NULL,
	[PercentContributed] [decimal](5, 4) NOT NULL,
	[Vote] [bit] NULL,
	[Abstain] [bit] NOT NULL,
 CONSTRAINT [PK__PartnerC__3214EC07D0BDE808] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Club] ON 

INSERT [dbo].[Club] ([Id], [ClubName], [PartnerCount], [AccreditedPartnerCount], [DollarsInvested], [ClubInvestable], [SelfDirected]) VALUES (1, N'Generic Partners', 6, 2, CAST(0.0000 AS Decimal(19, 4)), CAST(0.0000 AS Decimal(19, 4)), 1)
INSERT [dbo].[Club] ([Id], [ClubName], [PartnerCount], [AccreditedPartnerCount], [DollarsInvested], [ClubInvestable], [SelfDirected]) VALUES (2, N'Specific Group', 3, 0, CAST(0.0000 AS Decimal(19, 4)), CAST(0.0000 AS Decimal(19, 4)), 1)
INSERT [dbo].[Club] ([Id], [ClubName], [PartnerCount], [AccreditedPartnerCount], [DollarsInvested], [ClubInvestable], [SelfDirected]) VALUES (3, N'Heavy Hitters', 3, 2, CAST(0.0000 AS Decimal(19, 4)), CAST(0.0000 AS Decimal(19, 4)), 0)
SET IDENTITY_INSERT [dbo].[Club] OFF
SET IDENTITY_INSERT [dbo].[Distributions] ON 

INSERT [dbo].[Distributions] ([Id], [InvestmentId], [DistributedDate], [DistributedPerUnit]) VALUES (1, 4, CAST(N'2016-03-30T09:25:13.000' AS DateTime), CAST(50.0000 AS Decimal(19, 4)))
INSERT [dbo].[Distributions] ([Id], [InvestmentId], [DistributedDate], [DistributedPerUnit]) VALUES (2, 4, CAST(N'2016-06-30T09:25:13.000' AS DateTime), CAST(50.0000 AS Decimal(19, 4)))
INSERT [dbo].[Distributions] ([Id], [InvestmentId], [DistributedDate], [DistributedPerUnit]) VALUES (3, 4, CAST(N'2016-09-30T09:25:13.000' AS DateTime), CAST(50.0000 AS Decimal(19, 4)))
SET IDENTITY_INSERT [dbo].[Distributions] OFF
SET IDENTITY_INSERT [dbo].[Investment] ON 

INSERT [dbo].[Investment] ([Id], [AssetType], [ClubId], [OwnershipUnits], [DollarsInvested], [DollarsDivested], [ReceivingEntity], [DebtCoupon], [MatureDate], [ContractPrice], [PercentEquity], [InvestDate], [DivestDate], [Pending], [Invested], [Convertable]) VALUES (2, 1, 1, 100, CAST(1000.0000 AS Decimal(19, 4)), CAST(1734.8800 AS Decimal(19, 4)), N'Daves Emporium', NULL, NULL, NULL, CAST(0.0300 AS Decimal(5, 4)), CAST(N'2016-02-03T09:25:13.000' AS DateTime), CAST(N'2017-02-03T09:25:13.000' AS DateTime), 0, 0, 0)
INSERT [dbo].[Investment] ([Id], [AssetType], [ClubId], [OwnershipUnits], [DollarsInvested], [DollarsDivested], [ReceivingEntity], [DebtCoupon], [MatureDate], [ContractPrice], [PercentEquity], [InvestDate], [DivestDate], [Pending], [Invested], [Convertable]) VALUES (3, 2, 3, 10, CAST(10000.0000 AS Decimal(19, 4)), NULL, N'Daves Emporium', CAST(0.0232 AS Decimal(5, 4)), CAST(N'2017-02-03T09:25:13.000' AS DateTime), NULL, NULL, CAST(N'2016-02-03T09:25:13.000' AS DateTime), NULL, 1, 0, 0)
INSERT [dbo].[Investment] ([Id], [AssetType], [ClubId], [OwnershipUnits], [DollarsInvested], [DollarsDivested], [ReceivingEntity], [DebtCoupon], [MatureDate], [ContractPrice], [PercentEquity], [InvestDate], [DivestDate], [Pending], [Invested], [Convertable]) VALUES (4, 1, 2, 100, CAST(343.7600 AS Decimal(19, 4)), NULL, N'Phantom Inc.', NULL, NULL, NULL, CAST(0.0020 AS Decimal(5, 4)), CAST(N'2016-02-03T09:25:13.000' AS DateTime), NULL, 0, 1, 0)
SET IDENTITY_INSERT [dbo].[Investment] OFF
SET IDENTITY_INSERT [dbo].[InvestmentType] ON 

INSERT [dbo].[InvestmentType] ([Id], [InvestmentType]) VALUES (1, N'Equity')
INSERT [dbo].[InvestmentType] ([Id], [InvestmentType]) VALUES (2, N'Debt')
INSERT [dbo].[InvestmentType] ([Id], [InvestmentType]) VALUES (3, N'Options')
SET IDENTITY_INSERT [dbo].[InvestmentType] OFF
SET IDENTITY_INSERT [dbo].[Partner] ON 

INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (1, 0, N'Dylan', N'Murray')
INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (2, 1, N'Test', N'User')
INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (3, 0, N'Dave', N'Davies')
INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (4, 0, N'Jess', N'Day')
INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (5, 1, N'Mary', N'Sue')
INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (6, 0, N'Indego', N'Montana')
INSERT [dbo].[Partner] ([Id], [Accredited], [FirstName], [LastName]) VALUES (7, 0, N'Lonley', N'User')
SET IDENTITY_INSERT [dbo].[Partner] OFF
SET IDENTITY_INSERT [dbo].[PartnerClub] ON 

INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (1, 1, 1, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (2, 2, 1, 1, 1, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (3, 3, 1, 1, 1, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (4, 4, 1, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (5, 5, 1, 1, 1, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (6, 6, 1, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (7, 1, 2, 1, 1, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (8, 3, 2, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (9, 4, 2, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(100.00 AS Decimal(18, 2)), CAST(500.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (10, 2, 3, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(1000.00 AS Decimal(18, 2)), CAST(5000.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (11, 5, 3, 1, 0, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(1000.00 AS Decimal(18, 2)), CAST(5000.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (12, 7, 3, 0, 0, NULL, CAST(0.00 AS Decimal(18, 2)), CAST(0.00 AS Decimal(18, 2)), NULL)
INSERT [dbo].[PartnerClub] ([Id], [PartnerId], [ClubId], [ApprovedMember], [IsAdmin], [DateJoined], [Contributing], [Investable], [ClubExitDate]) VALUES (13, 6, 3, 1, 1, CAST(N'2015-01-01T00:00:00.000' AS DateTime), CAST(1000.00 AS Decimal(18, 2)), CAST(5000.00 AS Decimal(18, 2)), NULL)
SET IDENTITY_INSERT [dbo].[PartnerClub] OFF
SET IDENTITY_INSERT [dbo].[PartnerClubInvestment] ON 

INSERT [dbo].[PartnerClubInvestment] ([Id], [PartnerClubId], [InvestmentId], [PercentContributed], [Vote], [Abstain]) VALUES (1, 7, 4, CAST(0.0500 AS Decimal(5, 4)), 1, 0)
INSERT [dbo].[PartnerClubInvestment] ([Id], [PartnerClubId], [InvestmentId], [PercentContributed], [Vote], [Abstain]) VALUES (2, 8, 4, CAST(0.3500 AS Decimal(5, 4)), 1, 0)
INSERT [dbo].[PartnerClubInvestment] ([Id], [PartnerClubId], [InvestmentId], [PercentContributed], [Vote], [Abstain]) VALUES (3, 9, 4, CAST(0.6000 AS Decimal(5, 4)), 1, 0)
SET IDENTITY_INSERT [dbo].[PartnerClubInvestment] OFF
ALTER TABLE [dbo].[Distributions]  WITH CHECK ADD  CONSTRAINT [FK_Distributions_Investment] FOREIGN KEY([InvestmentId])
REFERENCES [dbo].[Investment] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Distributions] CHECK CONSTRAINT [FK_Distributions_Investment]
GO
ALTER TABLE [dbo].[Investment]  WITH CHECK ADD  CONSTRAINT [FK_Investment_Club] FOREIGN KEY([ClubId])
REFERENCES [dbo].[Club] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Investment] CHECK CONSTRAINT [FK_Investment_Club]
GO
ALTER TABLE [dbo].[Investment]  WITH CHECK ADD  CONSTRAINT [FK_Investment_InvestmentType] FOREIGN KEY([AssetType])
REFERENCES [dbo].[InvestmentType] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Investment] CHECK CONSTRAINT [FK_Investment_InvestmentType]
GO
ALTER TABLE [dbo].[PartnerClub]  WITH CHECK ADD  CONSTRAINT [FK_PartnerClub_Club] FOREIGN KEY([ClubId])
REFERENCES [dbo].[Club] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[PartnerClub] CHECK CONSTRAINT [FK_PartnerClub_Club]
GO
ALTER TABLE [dbo].[PartnerClub]  WITH CHECK ADD  CONSTRAINT [FK_PartnerClub_Partner] FOREIGN KEY([PartnerId])
REFERENCES [dbo].[Partner] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[PartnerClub] CHECK CONSTRAINT [FK_PartnerClub_Partner]
GO
ALTER TABLE [dbo].[PartnerClubInvestment]  WITH CHECK ADD  CONSTRAINT [FK_PartnerClubInvestment_Investment] FOREIGN KEY([InvestmentId])
REFERENCES [dbo].[Investment] ([Id])
GO
ALTER TABLE [dbo].[PartnerClubInvestment] CHECK CONSTRAINT [FK_PartnerClubInvestment_Investment]
GO
ALTER TABLE [dbo].[PartnerClubInvestment]  WITH CHECK ADD  CONSTRAINT [FK_PartnerClubInvestment_PartnerClub] FOREIGN KEY([PartnerClubId])
REFERENCES [dbo].[PartnerClub] ([Id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[PartnerClubInvestment] CHECK CONSTRAINT [FK_PartnerClubInvestment_PartnerClub]
GO
USE [master]
GO
ALTER DATABASE [InvestmentClubs] SET  READ_WRITE 
GO
